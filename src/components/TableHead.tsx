/* eslint-disable max-len */
function TableHead() {
  return (
    <div className="flex items-center justify-between px-4 py-4 mx-8 mt-8 border-b rounded-t-lg bg-light-neutral-100 dark:bg-dark-neutral-200 text-text-primary-light dark:text-text-primary-dark border-border-light dark:border-border-dark">
      <div className="flex-1">Name</div>
      <div className="flex-1">Description</div>
      <div className="flex-1">Price</div>
      <div className="flex-1">Stock</div>
      <div className="flex-1">Actions</div>
    </div>
  );
}

export default TableHead;
