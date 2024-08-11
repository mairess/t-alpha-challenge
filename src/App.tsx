import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route element={ <Layout /> }>
          <Route path="/dashboard" element={ <Dashboard /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
