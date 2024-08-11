/* eslint-disable max-len */
import { useContext, useState } from 'react';
import ThemeContext from '../context/ThemeContext';
import TableRow from '../components/TableRow';
import mockData from '../mocks';
import TableHead from '../components/TableHead';
import Modal from '../components/Modal';

function Dashboard() {
  const { isDarkMode } = useContext(ThemeContext);
  const data = mockData.data.products;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(!isModalOpen);

  return (

    <div className={ `${isDarkMode && 'dark'}` }>

      <div className="mx-8">
        <Modal isOpen={ isModalOpen } onClose={ showModal } />

        <TableHead />

        <div className="h-[43rem] overflow-auto">
          {data.map((product, index) => (
            <TableRow
              key={ index }
              index={ index }
              name={ product.name }
              description={ product.description }
              price={ product.price }
              stock={ product.stock }
              onClick={ showModal }
            />
          ))}
        </div>
      </div>

    </div>

  );
}

export default Dashboard;
