
import { useQuery } from "react-query";
import { jokeData } from "../../interface/jokeData";

let jokeDataSet:jokeData

const useJoke = () => {
    // https://official-joke-api.appspot.com/random_joke
 //상태 시그니처
 const {isLoading, error, data} = 
 useQuery(
   //1. query-key
   "jokes", 
   //2. 익명함수로 fetch를 실행. <-- 비동기 요청부분
 () =>
   fetch("https://official-joke-api.appspot.com/random_joke")
   //3. <-- 비동기 요청이 성공했을 경우에 그 뒤에 가공을 하는 부분
   .then(res => res.json()),
   //옵션. useQuery를 사용할때 옵션값으로 요청을 넣을수있음
   {
     refetchOnWindowFocus: false, // 화면에 포커싱될떄 데이터 갱신 여부
     retry: 1, //데이터가 안들어 왔을시에 다시 요청을 하는 횟수
     cacheTime: 1000 * 300, // 기존에 리액트쿼리가 내부적으로 가지고있는 캐시값을 몇초동안 가지고 있을지 시간 설정
     staleTime: 1000 & 20 // 데이터가 들어오고 나서 자동으로 리액트쿼리 주관하에 갱신시킬 시간.
   }
 );
   //가공 시그니처
 if(data) jokeDataSet = data
return {isLoading, error, jokeDataSet}

    
}
export default useJoke

