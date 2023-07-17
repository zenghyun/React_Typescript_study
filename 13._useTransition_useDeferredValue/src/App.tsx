import React, { useState, useEffect, ChangeEvent, useTransition } from "react";
import logo from "./assets/react.svg";

// 대량으로 생성할 아이템의 타입 정의
type ItemType = {
  id: number;
  keyword: string;
};

const App = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [results, setResults] = useState<Array<ItemType>>([]);

  // useTransition 훅을 이용해 startTransition 함수를 받아냄
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  // 컴포넌트가 마운트될 때 results 상태에 빈 배열을 생성
  // keyword 상태가 바뀔 때 keyword에 입력이 되었다면 5,000개의 아이템 생성
  // 대량의 데이터를 업데이트하는 것은 긴급하지 않음
  useEffect(() => {
    if (keyword.trim() === "") {
      setResults([]);
    } else {
      const items = Array.from(Array(5000), (item, index) => {
        return { id: index, keyword: keyword };
      });
      // 전환 작업으로 업데이트하도록 지정
      startTransition(() => {
        setResults(items);
      });
    }
  }, [keyword]);

  // results 상태를 이용해 div 대량 생성
  const divRows = results.map((item) => (
    <div key={item.id}>
      id: {item.id}
      <br />
      keyword: {item.keyword}
      <br />
      <img src={logo} style={{ width: 100, height: 100 }} />
      <hr />
    </div>
  ));

  // 사용자가 입력 필드에 타이핑하면 handleChange 함수를 실행하여 상태 변경
  // onChange 이벤트에 의해 바뀐 값을 렌더링 하는 것은 긴급한 업데이트가 요구됨

  return (
    <div style={{ margin: 10 }}>
      <div className="SearchInput">
        Keyword: <input type="text" value={keyword} onChange={handleChange} />
      </div>
      <hr />
      <div>
        {
          // isPending인 동안 true이면 fallback UI를 렌더링
          isPending ? <h2>로딩 중입니다.</h2> : divRows
        }
      </div>
    </div>
  );
};

export default App;
