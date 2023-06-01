/* eslint-disable */
import React from 'react';

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [content, setContent] = useState([{
    id: 0,
    글제목: 'c 남자 코트 추천0',
    따봉: 0
  },
  {
    id: 1,
    글제목: 'b 남자 코트 추천1',
    따봉: 0
  },
  {
    id: 2,
    글제목: 'a 남자 코트 추천2',
    따봉: 0
  }
  ]);



  let [입력값, 입력값변경] = useState('');

  return (

    <div className="App">
      <div className="black-nav">
        <h4>리엑트 블로그</h4>
      </div>

<button onClick={() => {
    const contestCopy = [...content].sort((a, i) => a.글제목.localeCompare(i.글제목));
    setContent(contestCopy);
  }}>이름 정렬</button>

<button onClick={() => {
  const contentCopy2 = [...content].sort((a, i) => i.따봉 - a.따봉);
  setContent(contentCopy2);
}}>따봉킹</button>

      {
        content.map(({id, 글제목, 따봉 }, i) =>
        (<div className="list" key={id}>
          <h4>
            {글제목}
            <span onClick={(e) => {
              e.stopPropagation();
              const contestCopy = content.map(props => {
                if(props.id === id){
                  return {
                    ...props,
                    따봉 : props.따봉 + 1,
                  }
                }
                return props;
              }) 
              setContent(contestCopy)
            }}>👍</span>
            {따봉}
          </h4>
          <p>2월 17일 발행</p>
          <button onClick={() => {
            const copy = content.filter(props => props.id !== id)
            console.log(content)
            console.log(copy)
            setContent(copy);
          }}>삭제</button>
        </div>)
        )
      }

      <input onChange={(e) => {
        입력값변경(e.target.value);
      }} />
      <button onClick={() => {
        let id = 0;

        content.forEach((props) => {
          id = Math.max(id, props.id)
        })
        const newContent = {
          id: id +1,
          글제목: 입력값,
          따봉: 0
        }
        setContent([...content, newContent])
      }}>버튼</button>
    </div>
  );
}


export default App;
