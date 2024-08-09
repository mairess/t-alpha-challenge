/* eslint-disable max-len */
type ButtonProps = {
  label?: string
};

function Button({ label = 'Login' }: ButtonProps) {
  return (

    <button className="w-full p-2 bg-button-primary-background-light dark:bg-button-primary-background-dark text-button-primary-text-light dark:text-button-primary-text-dark rounded-xl hover:bg-button-primary-hover-light dark:hover:bg-button-primary-hover-dark">

      {label}

    </button>

  );
}

export default Button;
