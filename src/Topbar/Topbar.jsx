import './Topbar.scss'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';
import CloseIcon from '@mui/icons-material/Close';
export default function Topbar({sidebar,setSidebar}) {
  
  return (
    <div className={sidebar?"topbar active" :"topbar"}>
     <div className="left">
      <label htmlFor="#home">Genius.</label>
      <ul>
        <li><PersonIcon/> <span>+ 871263 87163</span></li>
        <li><EmailIcon/> <span>safar@gamil.com</span></li>
      </ul>
     </div>
     <div className="right" onClick={()=>{setSidebar(!sidebar)}}>
      {
        sidebar ?<CloseIcon/> :<ViewSidebarIcon />
      }
   
    
     </div>
    </div>
  )
}
