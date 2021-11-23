import React, {useState, useRef, useEffect} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  background-color:${props => props.$mode? 'green' : ''};

  input {
    font-size: 40px;
    margin-bottom: 20px;
  }

  button {
    font-size: 40px;
    margin-bottom: 20px;
  }
`
const EffectsDemoNoDependency = () => {
  const [title, setTitle] = useState("default title");
  const titleRef = useRef();
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    console.log("useEffect  title");
    document.title = title;
  },[title]);

  useEffect(()=>{
    console.log('useEffect local storage')
    const persistedTitle = localStorage.getItem('title')
    setTitle(persistedTitle || [])
  },[])


  console.log("render");
  const handleClick = () => setTitle(titleRef.current.value);
  const handleCheckboxChange = () => setDarkMode(prev => !prev)

  return (
    <Wrapper $mode={darkMode}>
      <label htmlFor="darkMode">
        <input name='darkMode' type='checkbox' checked={darkMode} onChange={handleCheckboxChange}/>
      </label>
      <input ref={titleRef}/>
      <button onClick={handleClick}>change title</button>
    </Wrapper>
  );
}

export default EffectsDemoNoDependency;