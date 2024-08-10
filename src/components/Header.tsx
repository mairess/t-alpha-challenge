import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <header className="flex justify-between px-2">

      <div>
        <h1>Manage Products</h1>
      </div>

      <div>
        <p>Hello, fulano@mail.com</p>
        <button onClick={ handleLogout }>Logout</button>
      </div>
    </header>
  );
}

export default Header;
