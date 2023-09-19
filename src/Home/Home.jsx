
import './Home.scss'
// import image from './Home-image-removebg-preview.png'
 import image from './Home-image.jpg'
import { init } from 'ityped'
import { useEffect,useRef } from 'react'
export default function Home() {
  const Text=useRef()
  useEffect(()=>{
    init(Text.current, { showCursor: false,cursorChar: "|", strings: ["Front Developer", "React Developer","Web Developer" ] })
  },[])
  return (
    <div className="home" id="home">
      <div className="left">
       <div className="image">
       <img src={image} alt="" />
       </div>
      </div>
      <div className="right">
    <h3> Hi,There I am </h3>
    <h1>Aliva Sahu</h1>
    <h4>I am a <span ref={Text}></span></h4>
      </div>
    </div>
  )
}
