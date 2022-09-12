import {Link, useNavigate} from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import './Sidebar.scss';

export default function Sidebar() {
  const navigate = useNavigate();

  function onLogOut() {
    localStorage.removeItem('TOKEN');
    navigate('/login');
  }

  return (
      <aside className="sidebar">
        <Link to="/"><img className="logo" src={logo} alt="Logo"/></Link>
        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/users">Users</Link>
        </nav>

        <button onClick={onLogOut}>LOG OUT</button>
      </aside>
  );
}