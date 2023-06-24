import CustomButton from '../components/common/CustomButton';
import BallIcon from '../components/common/ballIcon';
import '../styles/globals.css';


function App() {
  return (
      // <AppRouter />
      <>
      <div className='DescBig'>안녕하세요!</div>
      <div className='DescBig'>프론트엔드 개발자 </div>
      <div className='DescBig'>유재우 입니다.</div>
      <BallIcon />
      {/* add laning contents */}
      <CustomButton text="CustomButton"/>
      </>

  )
}

export default App;
