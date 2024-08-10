/* eslint-disable max-len */

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
      className={ `flex items-center justify-between p-2 
    ${isOdd
        ? 'bg-light-neutral-200 dark:bg-dark-neutral-250'
        : 'bg-light-neutral-300 dark:bg-dark-neutral-300'} text-text-primary-light dark:text-text-primary-dark hover:bg-light-neutral-400 dark:hover:bg-dark-neutral-350` }
    >
      <div className="flex-1">{name}</div>
      <div className="flex-1">{description}</div>
      <div className="flex-1">{price}</div>
      <div className="flex-1">{stock}</div>
    </div>
  );
}

export default TableRow;
