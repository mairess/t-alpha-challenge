/* eslint-disable max-len */
import { useContext } from 'react';
import Header from '../components/Header';
import ThemeContext from '../context/ThemeContext';
import TableRow from '../components/TableRow';
import mockData from '../mocks';

function Dashboard() {
  const { isDarkMode } = useContext(ThemeContext);
  const data = mockData.data.products;
  return (
    <div className={ `${isDarkMode && 'dark'}` }>
      <Header />

      <div className="flex items-center justify-between p-4 border-b bg-surface-light dark:bg-surface-dark border-border-light dark:border-border-dark">

        <h1 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark">
          Manage
          <span className="ml-1 font-semibold">Products</span>
        </h1>

        <button className="p-2 rounded bg-button-primary-background-light dark:bg-button-primary-background-dark text-button-primary-text-light dark:text-button-primary-text-dark hover:bg-button-primary-hover-light dark:hover:bg-button-primary-hover-dark">
          Add new product
        </button>

      </div>

      <div>

        <div className="flex items-center justify-between p-2 border-b bg-light-neutral-100 dark:bg-dark-neutral-200 text-text-primary-light dark:text-text-primary-dark border-border-light dark:border-border-dark">
          <div className="flex-1">Name</div>
          <div className="flex-1">Description</div>
          <div className="flex-1">Price</div>
          <div className="flex-1">Stock</div>
        </div>

        {data.map((product, index) => (
          <TableRow
            key={ index }
            index={ index }
            name={ product.name }
            description={ product.description }
            price={ product.price }
            stock={ product.stock }
          />
        ))}

      </div>

    </div>
  );
}

export default Dashboard;
