import CustomButton from '../components/common/CustomButton';
import '../styles/globals.css';


function App() {
  return (
      // <AppRouter />
      <>
      <div className='DescBig'>안녕하세요!</div>
      <div className='DescBig'>프론트엔드 개발자 </div>
      <div className='DescBig'>유재우 입니다.</div>
      <div className="flex flex-wrap justify-center gap-10 mt-14">
      
      </div>
      {/* add laning contents */}
      <CustomButton text="CustomButton"/>
      </>

  )
}

export default App;
