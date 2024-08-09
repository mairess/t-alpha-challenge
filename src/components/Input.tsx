/* eslint-disable max-len */
type InputProps = {
  label: string;
  id: string;
  name: string;
  type?: string;
};

function Input({ label, id, name, type = 'text' }: InputProps) {
  return (

    <>

      <label
        className="block mb-1 text-text-secondary-light dark:text-text-secondary-dark"
        htmlFor={ id }
      >
        {label}

      </label>

      <input
        className="w-full px-4 py-2 border bg-input-background-light dark:bg-input-background-dark border-input-border-light dark:border-input-border-dark text-input-text-light dark:text-input-text-dark rounded-xl hover:border-input-hover-light dark:hover:border-input-hover-dark"
        type={ type }
        name={ name }
        id={ id }
      />

    </>
  );
}

export default Input;
