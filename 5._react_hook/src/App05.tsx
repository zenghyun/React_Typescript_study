import { useRef, useState } from 'react';

const App = () => {
    const [name, setName] = useState<string>("홍길동");
    const relTel = useRef("010-1234-1234");

  return (
    <div className='boxStyle'>
        <h2>상태 데이터</h2>
        <input type='text' value={name} onChange={e => setName(e.target.value)} />
        <br />
        <div>상태(name) : {name}</div>
        <hr />
        <input type='text' onChange={e => (relTel.current = e.target.value)} />
        <br />
        <div>relTel 값: {relTel.current}</div>
    </div>
  );
};

export default App;