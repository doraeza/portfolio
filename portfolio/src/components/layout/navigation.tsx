import { Link, useNavigate } from 'react-router-dom';
import logo from './../../assets/logo.png';
import { useRecoilState } from 'recoil';
import LoginBtn from './login';
import { loggedInState } from '../../store/atoms';

const Navigation = () => {
  let navigate = useNavigate()

  const [isLogin, setIsLogin]= useRecoilState(loggedInState)

  
  return (
    <nav className="bg-blue-300 sm:bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div className="flex items-center">
          <Link to="/main">
            <div className='flex items-center'>
            <img className="rounded-full shadow-md"
                        src={logo}
                        alt="Thumbnail"
                        height={50}
                        width={50}
                        />
            <div>&nbsp;&nbsp;&nbsp;Make_Relation</div>
            </div>
          </Link>
        </div>
        <div className="flex items-center">
        {isLogin ? 
        <>
          <Link to="/floating" className='transition duration-100 ease-in-out
                    transform hover:-translate-y-1 hover:scale-110'>Floating&nbsp;&nbsp;&nbsp;&nbsp;</Link>
          <Link to="/closet" className='transition duration-100 ease-in-out
                    transform hover:-translate-y-1 hover:scale-110'>My Closet&nbsp;&nbsp;&nbsp;&nbsp;</Link>
          <Link to="/mypage" className='transition duration-100 ease-in-out
                    transform hover:-translate-y-1 hover:scale-110'>My Page&nbsp;&nbsp;&nbsp;&nbsp;</Link>
        </>:
        <></>}
        <div className='bg-card-post  rounded-lg p-4' >
                    {/* bg-card-post hover:bg-green-300 rounded-lg p-4*/}
                    {/* 'transition duration-100 ease-in-out
                  bg-card-post hover:bg-green-300 transform
                  hover:-translate-y-1 hover:scale-110
                  rounded-lg p-4 ' */}
        <LoginBtn />
        </div>

        <Link to="/board" className='transition duration-100 ease-in-out
                  transform hover:-translate-y-1 hover:scale-110'>&nbsp;&nbsp;&nbsp;&nbsp;Contact US</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
