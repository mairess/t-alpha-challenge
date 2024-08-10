/* eslint-disable max-len */

function Footer() {
  return (
    <div
      className="fixed bottom-0 w-full p-2 border-t text-text-secondary-light dark:text-text-secondary-dark bg-surface-light dark:bg-surface-dark border-border-light dark:border-border-dark"
    >
      <div className="flex items-center justify-between">
        <p className="text-center">
          Total:
          {' '}
          <span className="font-bold">152</span>
        </p>
        <button
          className="p-2 rounded bg-button-primary-background-light dark:bg-button-primary-background-dark text-button-primary-text-light dark:text-button-primary-text-dark hover:bg-button-primary-hover-light dark:hover:bg-button-primary-hover-dark"
        >
          Add new product
        </button>
      </div>
    </div>
  );
}

export default Footer;
