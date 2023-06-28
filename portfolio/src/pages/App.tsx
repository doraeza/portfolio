import { css } from '@emotion/react';
import CustomButton from '../components/common/CustomButton';
import Landing from '../components/landing';


function App() {
  return (
      // <AppRouter />
      <div css={css({
        marginTop: "20px"
      })}>
        <Landing />
        
        {/* add laning contents */}
        <CustomButton text="CustomButton"/>
      </div>

  )
}

export default App;
