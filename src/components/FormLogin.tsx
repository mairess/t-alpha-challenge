/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import { FormEvent, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Input from './Input';
import Button from './Button';
import AuthPrompt from './AuthPrompt';
import ButtonToggleTheme from './ButtonToggleTheme';
import login from '../services/login';

function FormLogin() {
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [stayLoggedIn, setStayLoggedIn] = useState(false);
  const [formValues, setFormValues] = useState({ taxNumber: '', password: '' });
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('isDarkMode');
    return savedTheme !== null ? JSON.parse(savedTheme) : true;
  });

  const isFormValid = formValues.password.length >= 6 && formValues.taxNumber.length >= 11;

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleStayLoggedIn = () => {
    setStayLoggedIn(!stayLoggedIn);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setError('');
    event.preventDefault();
    const response = await login(formValues);
    if (response.includes('Credenciais') || response.includes('password must be longer')) {
      setError(response);
      return;
    }

    if (stayLoggedIn) {
      localStorage.setItem('token', response);
    } else {
      sessionStorage.setItem('token', response);
    }

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: 'success',
      title: 'Logado com sucesso!',
    }).then(() => {
      navigate('/dashboard');
    });
  };

  return (
    <main className={ `${isDarkMode && 'dark'}` }>

      <ButtonToggleTheme isDarkMode={ isDarkMode } onClick={ toggleTheme } />

      <div className="flex items-center justify-center min-h-screen bg-gradient-light dark:bg-gradient-dark">

        <div className="p-4 border rounded border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark">

          <h1 className="text-2xl font-bold text-center text-text-primary-light dark:text-text-primary-dark">{location.pathname === '/2' ? 'Log in' : 'Create account'}</h1>

          <form className="flex flex-col items-center justify-center gap-4 m-4" onSubmit={ handleSubmit }>
            <div>
              <Input
                id="taxNumber"
                label="TaxNumber"
                name="taxNumber"
                type="number"
                fieldValue={ formValues.taxNumber }
                onChange={ handleInputChange }
              />
            </div>

            <div>
              <Input
                id="password"
                label="Password"
                name="password"
                type="password"
                fieldValue={ formValues.password }
                onChange={ handleInputChange }
              />
              {error && <p className="mt-2 text-sm text-error-light dark:text-error-dark">{error}</p>}
            </div>

            <Button label="Login" disabled={ !isFormValid } />

          </form>

          <AuthPrompt
            text="Don't have an account?"
            linkText="Create"
            linkTo="/register"
          />

          <div className="flex items-center justify-center">

            <label
              className="text-text-secondary-light dark:text-text-secondary-dark"
              htmlFor="stayLoggedIn"
            >
              Keep me logged in

            </label>

            <input
              className="px-4 py-2 ml-2 border bg-input-background-light dark:bg-input-background-dark border-input-border-light dark:border-input-border-dark text-input-text-light dark:text-input-text-dark rounded-xl hover:border-input-hover-light dark:hover:border-input-hover-dark"
              id="stayLoggedIn"
              name="stayLoggedIn"
              type="checkbox"
              checked={ stayLoggedIn }
              onChange={ toggleStayLoggedIn }
            />

          </div>

        </div>

      </div>

    </main>
  );
}

export default FormLogin;
