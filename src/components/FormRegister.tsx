/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import { FormEvent, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Input from './Input';
import Button from './Button';
import AuthPrompt from './AuthPrompt';
import ButtonToggleTheme from './ButtonToggleTheme';
import createUser from '../services/createUser';
import handleErrorCreationUser from '../utils/handleErrorCreationUser';

function FormRegister() {
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [formValues, setFormValues] = useState({
    name: '',
    taxNumber: '',
    mail: '',
    phone: '',
    password: '',
  });
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('isDarkMode');
    return savedTheme !== null ? JSON.parse(savedTheme) : true;
  });

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setError('');
    event.preventDefault();
    const response = await createUser(formValues);

    if (
      response.includes('taxNumber')
      || response.includes('mail')
      || response.includes('phone')
      || response.includes('password')
      || response.includes('já cadastrado')
    ) {
      setError(response);
      return;
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
      title: `${response}!`,
    }).then(() => {
      navigate('/');
    });
  };

  return (
    <div className={ `${isDarkMode && 'dark'}` }>

      <ButtonToggleTheme isDarkMode={ isDarkMode } onClick={ toggleTheme } />

      <div className="flex items-center justify-center min-h-screen bg-gradient-light dark:bg-gradient-dark">

        <div className="p-4 border rounded border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark">

          <h1 className="text-2xl font-bold text-center text-text-primary-light dark:text-text-primary-dark">{location.pathname === '/' ? 'Log in' : 'Create Account'}</h1>

          <form className="flex flex-col items-center justify-center gap-4 m-4" onSubmit={ handleSubmit }>
            <div>
              <Input
                id="name"
                label="Name"
                name="name"
                type="text"
                fieldValue={ formValues.name }
                onChange={ handleInputChange }
              />
              {error && <p className="mt-2 text-sm text-error-light dark:text-error-dark">{handleErrorCreationUser(error, 'cadastrado')}</p>}
            </div>

            <div>
              <Input
                id="taxNumber"
                label="TaxNumber"
                name="taxNumber"
                type="number"
                fieldValue={ formValues.taxNumber }
                onChange={ handleInputChange }
              />
              {error && <p className="mt-2 text-sm text-error-light dark:text-error-dark">{handleErrorCreationUser(error, 'taxNumber') }</p>}
            </div>

            <div>
              <Input
                id="mail"
                label="Email"
                name="mail"
                type="text"
                fieldValue={ formValues.mail }
                onChange={ handleInputChange }
              />
              {error && <p className="mt-2 text-sm text-error-light dark:text-error-dark">{handleErrorCreationUser(error, 'mail')}</p>}
            </div>

            <div>
              <Input
                id="phone"
                label="Phone"
                name="phone"
                type="tel"
                fieldValue={ formValues.phone }
                onChange={ handleInputChange }
              />
              {error && <p className="mt-2 text-sm text-error-light dark:text-error-dark">{handleErrorCreationUser(error, 'phone')}</p>}
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
              {error && <p className="mt-2 text-sm text-error-light dark:text-error-dark">{handleErrorCreationUser(error, 'password')}</p>}
            </div>

            <Button label="Register" />

          </form>

          <AuthPrompt
            text="Already have an account?"
            linkText="Log in"
            linkTo="/"
          />

        </div>

      </div>

    </div>
  );
}

export default FormRegister;
