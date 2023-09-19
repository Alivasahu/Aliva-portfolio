import { useState } from 'react'
import './Contact.scss'
import image from './contact.png'
export default function Contact() {
  const [message,setMessage]=useState(false)
  const [data,setData]=useState({
    email:"",
    msg:""
  })
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const SubmitDone=(e)=>{
    e.preventDefault();
   
    if(data.email && data.msg){
      console.log(data)
      setMessage(true)
    }else{
      alert("please fill the form")
    }
    setData({
      email:"",
      msg:""
    })
   
  }
  return (
    <div className="contact" id='contact'>
      <div className="contact-image">
      <img src={image} alt="" />
      </div>
      <div className="contact-form">
      <h2>Contact</h2>
        <form action="#" onSubmit={SubmitDone}>

          <input type="email" placeholder='Email' value={data.email} name="email" onChange={handleInputChange}/>
          <textarea  id="" cols="30" rows="10" name="msg" placeholder='Message' value={data.msg} onChange={handleInputChange}></textarea>
          <button >Send</button>
        {message && <span>Thank You For This Information :)</span>}
        </form>
      </div>
    </div>
  )
}
