/* eslint-disable max-len */
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ThemeContext from '../context/ThemeContext';

function Header() {
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <div className={ `${isDarkMode && 'dark'}` }>
      <header className="flex items-center justify-between p-2 border-b bg-surface-light dark:bg-surface-dark border-border-light dark:border-border-dark">

        <button
          className="w-10 h-10 rounded-full top-4 right-4 bg-button-secondary-background-light dark:bg-button-secondary-background-dark text-button-secondary-text-light dark:text-button-secondary-text-dark hover:bg-button-secondary-hover-light dark:hover:bg-button-secondary-hover-dark"
          onClick={ toggleTheme }
        >
          {isDarkMode ? '🌞' : '🌙'}
        </button>

        <div>
          <h1 className="text-xl font-bold text-center text-text-primary-light dark:text-text-primary-dark">
            Products
          </h1>
        </div>

        <div className="flex flex-col items-end gap">
          <div>
            <p className="text-text-secondary-light dark:text-text-secondary-dark">fulano@mail.com</p>
          </div>
          <div>
            <button
              className="font-bold text-link-light dark:text-link-dark hover:underline"
              onClick={ handleLogout }
            >
              Logout
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
