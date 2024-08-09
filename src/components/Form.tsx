/* eslint-disable max-len */
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Input from './Input';
import Button from './Button';
import AuthPrompt from './AuthPrompt';
import ButtonToggleTheme from './ButtonToggleTheme';
import { ErrorState, Field } from '../types';

type FormProps = {
  fields: Field[],
  buttonText: string,
  authPromptText: string,
  authPromptLinkText: string,
  authPromptLinkTo: string
};

function Form({ fields, buttonText, authPromptText, authPromptLinkText, authPromptLinkTo }: FormProps) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [error, setError] = useState<ErrorState>({
    name: '',
    cpf: '',
    email: '',
    phone: '',
    password: '',
    'confirm-password': '',
  });
  const location = useLocation();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={ `${isDarkMode && 'dark'}` }>

      <ButtonToggleTheme isDarkMode={ isDarkMode } onClick={ toggleTheme } />

      <div className="flex items-center justify-center min-h-screen bg-gradient-light dark:bg-gradient-dark">

        <div className="p-4 border rounded border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark">

          <h1 className="text-2xl font-bold text-center text-text-primary-light dark:text-text-primary-dark">{location.pathname === '/' ? 'Login' : 'Register'}</h1>

          <form className="flex flex-col items-center justify-center gap-4 m-4" action="">

            {fields.map((field, index) => (
              <div key={ index }>
                <Input
                  id={ field.id }
                  label={ field.label }
                  name={ field.name }
                  type={ field.type }
                />
                {error[field.name] && <p className="mt-2 text-sm text-error-light dark:text-error-dark">{error[field.name]}</p>}
              </div>
            ))}

            <Button label={ buttonText } />

          </form>

          <AuthPrompt
            text={ authPromptText }
            linkText={ authPromptLinkText }
            linkTo={ authPromptLinkTo }
          />

        </div>

      </div>

    </div>
  );
}

export default Form;
