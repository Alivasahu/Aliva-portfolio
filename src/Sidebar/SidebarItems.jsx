import './Sidebar.scss'

export default function SidebarItems({setSidebar,sidebar,item}) {
  return (
    <li><a href={`#${item}`} onClick={()=>{setSidebar(!sidebar)}}>{item}</a></li>
  )
}
