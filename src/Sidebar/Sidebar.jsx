import './Sidebar.scss'
import SidebarItems from './SidebarItems'

export default function Sidebar({sidebar,setSidebar}) {
  return (
   <div className={sidebar?"sidebar active":"sidebar"}>
    <ul>
        <SidebarItems sidebar={sidebar} setSidebar={setSidebar} item="home"/>
        <SidebarItems sidebar={sidebar} setSidebar={setSidebar} item="skills"/>
        <SidebarItems sidebar={sidebar} setSidebar={setSidebar} item="portfolio"/>
        <SidebarItems sidebar={sidebar} setSidebar={setSidebar} item="contact"/>
    </ul>
   </div>
  )
}
