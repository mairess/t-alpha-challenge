/* eslint-disable max-len */
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useContext } from 'react';
import getToken from '../utils/getToken';
import ThemeContext from '../context/ThemeContext';

type TableRowProps = {
  index: number,
  id: number;
  name: string,
  description: string,
  price: number,
  stock: number
  onClick: () => void
};

function TableRow({ index, id, name, description, price, stock, onClick }: TableRowProps) {
  const { refresh, setRefresh } = useContext(ThemeContext);
  const isOdd = index % 2 === 0;

  const token = getToken();

  const handleRemove = async () => {
    try {
      await fetch(`https://interview.t-alpha.com.br/api/products/delete-product/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      setRefresh(!refresh);
    } catch (error: any) {
      console.error('Failed to save changes');
    }
  };

  return (
    <div
      className={ `flex items-center justify-between py-2 px-4 
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
          onClick={ onClick }
        >
          <FaEdit className="text-current" />
        </button>

        <button
          className="p-2 mx-1 rounded bg-button-primary-background-light dark:bg-button-primary-background-dark text-button-primary-text-light dark:text-button-primary-text-dark hover:bg-button-primary-hover-light dark:hover:bg-button-primary-hover-dark"
          aria-label="Delete"
          onClick={ handleRemove }
        >
          <FaTrash className="text-current" />
        </button>

      </div>

    </div>
  );
}

export default TableRow;
