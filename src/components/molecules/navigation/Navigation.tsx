import { PATH } from '../../../App';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav role="navigation">
      <NavLink to="." end>
        Characters
      </NavLink>
      <NavLink to={PATH.EPISODE}>Episodes</NavLink>
      <NavLink to={PATH.LOCATION}>Location</NavLink>
    </nav>
  );
};

export default Navigation;
