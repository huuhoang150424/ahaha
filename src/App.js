import { useEffect, useState } from "react";
export default function App() {
  const [chars, setChars] = useState('');
  const [words, setWords] = useState([]);
  const handleValues = (e) => {
    setChars(e.target.value);
  };
  const handleClick = () => {
    setWords((prev) => {
      const lst=[...prev, chars]
      localStorage.setItem('Toodlist',JSON.stringify(lst))
      return lst
    });
    setChars('')
  };
  //lưu lại kết quả
  useEffect(()=>{
    const saveWord=localStorage.getItem('Toodlist')
    if (saveWord) {
      setWords(JSON.parse(saveWord))
    }
  },[]) 
  return (
    <div className="m-[30px]">
      <input
        type="text"
        value={chars}
        className="outline-none border border-blue-600 px-4 py-2 w-[400px]"
        onChange={handleValues}
      />
      <button
        type="button"
        className="px-4 py-2 w-[100px] bg-blue-500 border border-blue-500"
        onClick={handleClick}
      >
        Click Me!
      </button>
      <div>
        <ul>
          {words.map((word,index)=>{
            return (
              <li key={index}>{word}</li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}
