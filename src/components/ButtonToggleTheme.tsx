/* eslint-disable max-len */
type ButtonToggleThemeProps = {
  onClick: () => void,
  isDarkMode: boolean
};

function ButtonToggleTheme({ onClick, isDarkMode }: ButtonToggleThemeProps) {
  return (

    <button
      className="fixed w-10 h-10 rounded-full top-4 right-4 bg-button-secondary-background-light dark:bg-button-secondary-background-dark text-button-secondary-text-light dark:text-button-secondary-text-dark hover:bg-button-secondary-hover-light dark:hover:bg-button-secondary-hover-dark"
      onClick={ onClick }
    >

      {isDarkMode ? '🌞' : '🌙'}

    </button>
  );
}

export default ButtonToggleTheme;
