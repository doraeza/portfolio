import { atom, selector, useSetRecoilState} from 'recoil';
import axios from 'axios';


export const userLogin = atom({
    key: 'isLogin', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
  });
  
  export const loggedInState = atom({
    key: 'loggedInState',
    default: false,
  });
  
  export const loginState = atom({
    key: 'loginState',
    default: {
      email: '',
      password: '',
    },
  });
  
  export const errorMessageState = atom({
    key: 'errorMessageState',
    default: 'error',
  });
  
  export const handleLogin = selector({
    key: 'handleLogin',
    get: ({ get }) => {
      const { email, password } = get(loginState);
      const setLoggedIn = useSetRecoilState(loggedInState);
      const setErrorMessage = useSetRecoilState(errorMessageState);
  
      return async () => {
        try {
          const response = await axios.post('/api/login', { email, password });
          setLoggedIn(true);
        } catch (error) {
          setLoggedIn(false);
          setErrorMessage('잘못된 이메일 또는 비밀번호입니다.');
        }
      };
    },
  });
  
  export const handleLogout = selector({
    key: 'handleLogout',
    get: ({ get }) => {
      const setLoggedIn = useSetRecoilState(loggedInState);
  
      return async () => {
        await axios.post('/api/logout');
        setLoggedIn(false);
      };
    },
  });