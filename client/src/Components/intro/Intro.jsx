import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, { 
      showCursor: true,
      backDelay: 1500,
      backSpeed: 50,
      strings: ['Developer', 'Network Administrator', 'System Administrator'], 
    });
  }, []);

  return (
    <div className='intro' id='intro'>
        <div className="left"> 
          <div className="wrapper">
            <h2>HI there, I'm</h2>
            <h1>Louis Bauchau</h1>
            <h3>IT Students <span ref={textRef}></span></h3>
          </div>
          <a href="#portfolio">
            <img src='assets/down.png' alt=""></img>
          </a>
        </div>
        <div className="right">
          <div className="imgContainer">
            <img src="assets/man.png" alt=""/>
          </div>
        </div>
    </div>
  )
}
