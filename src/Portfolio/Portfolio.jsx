import './Portfolio.scss'
import Data from './Data.js'
import { useState } from 'react'
export default function Portfolio() {
  const [selected,setSelected]=useState("All")
  const [item, setItem] = useState(Data)
  const UniqueTab = ["All",...new Set(Data.map((tab) => tab.category))]
  const [tab, setTab] = useState(UniqueTab)
  
  const showItem=(data)=>{

  if(data==="All"){
    setItem(Data)
  }else{
    const Items=Data.filter((ele)=>{
     return ele.category===data
    })
    setItem(Items)
  }setSelected(data)
  }
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul className='portfolio-link'>
        {
          tab.map((tab, index) => {
            return (
              <li key={index} className={selected===tab?"active":" "} onClick={()=>{showItem(tab)}}>{tab}</li>
            )
          })
        }
      
      </ul>
      <div className="portfolio-item">
        {
          item.map((ele, index) => {
            return (
              <div className="item" key={index}>
                <div className="image">
                  <img src={ele.ItemImage} alt="" />
                </div>
                <div className="content">
                  <h2>{ele.category}</h2>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
