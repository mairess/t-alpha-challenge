/* eslint-disable max-len */
import { useContext, useState } from 'react';
import ThemeContext from '../context/ThemeContext';
import TableRow from '../components/TableRow';
import TableHead from '../components/TableHead';
import Modal from '../components/ModalUpdate';
import { ProductType } from '../types';
import useFetchData from '../hooks/useFetchData';
import getToken from '../utils/getToken';

function Dashboard() {
  const { isDarkMode } = useContext(ThemeContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
  const { refresh } = useContext(ThemeContext);

  const showModal = () => setIsModalOpen(!isModalOpen);

  const handleRowClick = (product: ProductType) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const token = getToken();

  const { data } = useFetchData({
    url: 'https://interview.t-alpha.com.br/api/products/get-all-products',
    token,
    method: 'GET',
    refresh,
  });

  return (

    <div className={ `${isDarkMode && 'dark'}` }>

      <div className="mx-8">

        <Modal
          onClose={ showModal }
          product={ selectedProduct }
          isModalOpen={ isModalOpen }
        />

        <TableHead />

        <div className="h-[43rem] overflow-auto">

          {data?.data.products.map((product: ProductType, index: number) => (
            <TableRow
              key={ index }
              index={ index }
              id={ product.id }
              name={ product.name }
              description={ product.description }
              price={ product.price }
              stock={ product.stock }
              onClick={ () => handleRowClick(product) }
            />
          ))}

        </div>

      </div>

    </div>

  );
}

export default Dashboard;
