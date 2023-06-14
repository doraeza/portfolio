import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import useDeepFreeze from "../common/useDeepFreeze";

const useUserInfoRefac =  () => {
    // 리액트 쿼리를 이용하여 유저 정보를 가지고온다 - https://randomuser.me/api/
    // 가공해야하는 부분, 비동기 처리를 통해 해결할 부분들을 구현한뒤 객체로 리턴시키는데,
    // 객체를 생성한다음 필요하다면, 완전 동결을 시키는 법을 배워보자 - deepfreeze()
    let a =1    
        const useFetcher = async () => {
        const res = await axios.get("https://randomuser.me/api");
        return res.data;
      }
      const [value, setValue] = React.useState(0)
    //state
    const { status, data, error } = useQuery(["userData", value], useFetcher, {
        // enabled: true, // <-- true가 아니면 작동자체를 안함, isloading
        //탄스택 쿼리로 변경후에 쿼리키를 배열로 넣고 동시참조할 애를 같이 넣어준다.
        refetchOnWindowFocus: false,
        cacheTime: 1000 * 300,
        staleTime: 0,
        retry: 1, // 실패시 재호출 몇번 할지
        onSuccess: data => {
          // 성공시 호출
          console.log("onSuccess", data.results);
        },
        onError: (e:any) => {
          // 실패시 호출 (401, 404 같은 error가 아니라 정말 api 호출이 실패한 경우만 호출됩니다.)
          // 강제로 에러 발생시키려면 api단에서 throw Error 날립니다. (참조: https://react-query.tanstack.com/guides/query-functions#usage-with-fetch-and-other-clients-that-do-not-throw-by-default)
          console.log(e.message);
        }
      })

    //async
    if (status === "loading") {
        return <span>Loading...</span>;
    }

    if (status === "error") {
        return <span>Error</span>;
    }
    
    //objecting
    useDeepFreeze(data)

    //return
    return (
        <ul>
          {data.results.map((el:any, idx:number) => (
              <li key={idx}>
                <span>{el.name.title}&nbsp;</span>
                <span>{el.name.first}&nbsp;</span>
                <span>{el.name.last }</span>
                </li>
          ))}
        </ul>
    );
    }
    export default useUserInfoRefac