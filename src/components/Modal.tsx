/* eslint-disable max-len */
import { FaTimes } from 'react-icons/fa';
import Input from './Input';

type ModalProps = {
  isOpen: boolean,
  onClose: () => void
};
function Modal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  const handle = () => {
    console.log('hello');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-md p-6 rounded-lg shadow-lg bg-light-neutral-0 dark:bg-dark-neutral-0">
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
            fieldValue='TV 55" 4K Full HD'
            onChange={ handle }
          />
          {/* {error && <p className="mt-2 text-sm text-error-light dark:text-error-dark">{handleErrorCreationUser(error, 'mail')}</p>} */}
        </div>

        <div>
          <Input
            id="description"
            label="Description"
            name="description"
            type="text"
            fieldValue="Televisão com cores vibrantes"
            onChange={ handle }
          />
          {/* {error && <p className="mt-2 text-sm text-error-light dark:text-error-dark">{handleErrorCreationUser(error, 'mail')}</p>} */}
        </div>

        <div>
          <Input
            id="price"
            label="Price"
            name="price"
            type="number"
            fieldValue="2999.99"
            onChange={ handle }
          />
          {/* {error && <p className="mt-2 text-sm text-error-light dark:text-error-dark">{handleErrorCreationUser(error, 'mail')}</p>} */}
        </div>

        <div>
          <Input
            id="stock"
            label="Stock"
            name="stock"
            type="number"
            fieldValue="10"
            onChange={ handle }
          />
          {/* {error && <p className="mt-2 text-sm text-error-light dark:text-error-dark">{handleErrorCreationUser(error, 'mail')}</p>} */}
        </div>

      </div>
    </div>
  );
}

export default Modal;
