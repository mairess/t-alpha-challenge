/* eslint-disable max-len */
import { FaTimes } from 'react-icons/fa';
import { useContext, useEffect, useState } from 'react';
import Input from './Input';
import { ProductType } from '../types';
import getToken from '../utils/getToken';
import ThemeContext from '../context/ThemeContext';

type ModalProps = {
  product: ProductType | null,
  onClose: () => void
  isModalOpen: boolean,
};

function Modal({ product, onClose, isModalOpen }: ModalProps) {
  const { setRefresh, refresh } = useContext(ThemeContext);
  const [formValues, setFormValues] = useState({
    name: '',
    description: '',
    price: 0,
    stock: 0,
  });

  useEffect(() => {
    if (product) {
      setFormValues({
        name: product.name || '',
        description: product.description || '',
        price: product.price || 0,
        stock: product.stock || 0,
      });
    }
  }, [product]);

  const token = getToken();

  if (!isModalOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch(`https://interview.t-alpha.com.br/api/products/update-product/${product?.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify({
          ...formValues,
          price: Number(formValues.price),
          stock: Number(formValues.stock),
        }),
      });
      setRefresh(!refresh);
      onClose();
    } catch (error) {
      console.error('Failed to save changes');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <form
        className="relative w-full max-w-md p-6 rounded-lg shadow-lg bg-light-neutral-0 dark:bg-dark-neutral-0"
      >
        <button
          onClick={ onClose }
          className="absolute top-2 right-2 text-light-neutral-500 hover:text-light-neutral-700"
          aria-label="Fechar modal"
        >
          <FaTimes size={ 24 } />
        </button>
        <h2 className="mb-4 text-xl font-bold text-text-primary-light dark:text-text-primary-dark">
          Cadastrar Produto
        </h2>

        <div>
          <Input
            id="name"
            label="Name"
            name="name"
            type="text"
            fieldValue={ formValues.name }
            onChange={ handleInputChange }
          />
          {/* {error && <p className="mt-2 text-sm text-error-light dark:text-error-dark">{handleErrorCreationUser(error, 'mail')}</p>} */}
        </div>

        <div>
          <Input
            id="description"
            label="Description"
            name="description"
            type="text"
            fieldValue={ formValues.description }
            onChange={ handleInputChange }
          />
          {/* {error && <p className="mt-2 text-sm text-error-light dark:text-error-dark">{handleErrorCreationUser(error, 'mail')}</p>} */}
        </div>

        <div>
          <Input
            id="price"
            label="Price"
            name="price"
            type="number"
            fieldValue={ String(formValues.price) }
            onChange={ handleInputChange }
          />
          {/* {error && <p className="mt-2 text-sm text-error-light dark:text-error-dark">{handleErrorCreationUser(error, 'mail')}</p>} */}
        </div>

        <div>
          <Input
            id="stock"
            label="Stock"
            name="stock"
            type="number"
            fieldValue={ String(formValues.stock) }
            onChange={ handleInputChange }
          />
          {/* {error && <p className="mt-2 text-sm text-error-light dark:text-error-dark">{handleErrorCreationUser(error, 'mail')}</p>} */}
        </div>

        <div className="flex items-center justify-end p-4">

          <button
            className="p-2 mx-2 rounded bg-button-primary-background-light dark:bg-button-primary-background-dark text-button-primary-text-light dark:text-button-primary-text-dark hover:bg-button-primary-hover-light dark:hover:bg-button-primary-hover-dark"
            type="submit"
            onClick={ handleSave }
          >
            Save
          </button>

          <button
            className="p-2 rounded bg-button-primary-background-light dark:bg-button-primary-background-dark text-button-primary-text-light dark:text-button-primary-text-dark hover:bg-button-primary-hover-light dark:hover:bg-button-primary-hover-dark"
            type="button"
            onClick={ onClose }
          >
            Cancel
          </button>

        </div>
      </form>
    </div>
  );
}

export default Modal;
