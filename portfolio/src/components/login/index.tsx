import { useRecoilState } from 'recoil';
import { loggedInState } from '../../store/atoms';
import { useNavigate } from 'react-router-dom';
import LoginModal from './loginModal';
import React from 'react';
import useLogin from '../../hooks/useLogin';

const LoginBtn = () => {
    const { inputId, inputPwd, login } = useLogin()
    const navigate = useNavigate()
    const [isLogin, setIsLogin]= useRecoilState(loggedInState)
    const [modalOpen, setModalOpen] = React.useState(false);
    
    const loginToggle = () => {
        if(isLogin === false){
          //클릭시에 로그인이 되엇다는 상태를 변경하는것이 아니라, 해당하는 로그인 모달을 노출시키게끔 변경해야함
          setIsLogin(true)
        } else {
          setIsLogin(false)
          goHome()
          setModalOpen(false)
        }
      }
    

      // 모달창 노출
      const showModal = () => {
          setModalOpen(true);
      };
  
      const goHome = () => {
        navigate("/",  { replace: true})
      }
    return (
        <div>
        {isLogin ? 
            <div className="cursor-pointer" onClick={loginToggle}>Logout</div>
            : <div>
                <div className="cursor-pointer" onClick={showModal}>Join / Login</div>
                {modalOpen && <LoginModal setModalOpen={setModalOpen} inputId={inputId} inputPwd={inputPwd} login={login} loginToggle={loginToggle}/> }
              </div>}
        </div>
        )
}
export default LoginBtn