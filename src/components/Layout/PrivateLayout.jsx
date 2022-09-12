import Sidebar from '../Sidebar';
import './PrivateLayout.scss';

export default function PrivateLayout(props) {
  return (
      <div className="private--layout">
        <Sidebar/>
        <div className="app-content">{props.children}</div>
      </div>
  );
}