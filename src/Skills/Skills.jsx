import './Skills.scss'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
const data = [
  {
    id: 1,
    title: "HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets) are two of the core technologies for building web pages. HTML provides the structure of the page, while CSS provides the style",
    image: "Images/css3-html5.png"
  },
  {
    id: 2,
    title: "JavaScript is a popular programming language used for web development. It is the programming language of the Web and is easy to learn. ",
    image: "Images/js.jpg"
  },
  {
    id: 3,
    title: "React is a JavaScript library that is used to build user interfaces. It was developed by Facebook and is now maintained by Facebook and a community of individual developers and companies.",
    image: "Images/react_js.jpg"
  }
]
export default function Skills() {
  const [slide, setSlide] = useState(0)
  const Arrow = (way) => {
    if (way === "left") {
      setSlide(slide > 0 ? slide - 1 : data.length - 1)
    } else {
      setSlide(slide < data.length - 1 ? slide + 1 : 0)
    }
  }
  return (
    <div className="skills" id='skills'>
      <div className="slider" style={{ transform: `translateX(-${slide * 100}vw)` }}>
        {/* <div className="slider" style={{transform:`translateX (-${2*100}vw)`}}> */}
        {/* transform: translatex(-100px); */}
        {
          data.map((item) => {
            return (
              <div className="container">
                <div className="item">
                  <div className="left-side">
                    <h2>Title</h2>
                    <h3>{item.title}</h3>
                    <a href="#">Projects</a>
                  </div>
                  <div className="right-side">
                    <img src={item.image} alt="" />
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>
      <ArrowBackIosIcon className='left-arrow' onClick={() => { Arrow("left") }} />
      <ArrowForwardIosIcon className='right-arrow' onClick={() => { Arrow("right") }} />
    </div>
  )
}
