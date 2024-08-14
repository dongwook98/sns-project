import { useNavigate } from 'react-router-dom';
import { BsHouse } from 'react-icons/bs';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';

export default function MenuList() {
  const navigate = useNavigate();

  return (
    <div className='footer'>
      <div className='footer__grid'>
        <button type='button' onClick={() => navigate('/')}>
          <BsHouse />
          Home
        </button>
        <button type='button' onClick={() => navigate('/profile')}>
          <FaRegUserCircle />
          Profile
        </button>
        <button type='button' onClick={() => navigate('/')}>
          <MdLogout />
          Logout
        </button>
      </div>
    </div>
  );
}
