/* eslint-disable max-len */
import { FaEdit, FaTrash } from 'react-icons/fa';

type TableRowProps = {
  index: number,
  name: string,
  description: string,
  price: number,
  stock: number
};

function TableRow({ index, name, description, price, stock }: TableRowProps) {
  const isOdd = index % 2 === 0;

  return (
    <div
      className={ `mx-8 flex items-center justify-between py-2 px-4 
    ${isOdd
        ? 'bg-light-neutral-200 dark:bg-dark-neutral-250'
        : 'bg-light-neutral-300 dark:bg-dark-neutral-300'} text-text-primary-light dark:text-text-primary-dark hover:bg-light-neutral-400 dark:hover:bg-dark-neutral-350` }
    >

      <div className="flex-1">{name}</div>
      <div className="flex-1">{description}</div>
      <div className="flex-1">{price}</div>
      <div className="flex-1">{stock}</div>

      <div className="flex-1">

        <button
          className="p-2 mx-1 rounded bg-button-primary-background-light dark:bg-button-primary-background-dark text-button-primary-text-light dark:text-button-primary-text-dark hover:bg-button-primary-hover-light dark:hover:bg-button-primary-hover-dark"
          aria-label="Edit"
        >
          <FaEdit className="text-current" />
        </button>

        <button
          className="p-2 mx-1 rounded bg-button-primary-background-light dark:bg-button-primary-background-dark text-button-primary-text-light dark:text-button-primary-text-dark hover:bg-button-primary-hover-light dark:hover:bg-button-primary-hover-dark"
          aria-label="Delete"
        >
          <FaTrash className="text-current" />
        </button>

      </div>

    </div>
  );
}

export default TableRow;
