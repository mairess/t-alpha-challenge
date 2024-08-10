/* eslint-disable max-len */
import { useContext } from 'react';
import Header from '../components/Header';
import ThemeContext from '../context/ThemeContext';
import TableRow from '../components/TableRow';
import mockData from '../mocks';
import TableHead from '../components/TableHead';
import Footer from '../components/TableFooter';

function Dashboard() {
  const { isDarkMode } = useContext(ThemeContext);
  const data = mockData.data.products;

  return (

    <div className={ isDarkMode ? 'dark pb-28 bg-light-neutral-800' : ' pb-28 bg-dark-neutral-900' }>

      <Header />

      <TableHead />

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

      <Footer />

    </div>

  );
}

export default Dashboard;
