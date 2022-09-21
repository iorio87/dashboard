import './sidebar.scss'
import {LineStyle, Timeline, TrendingUp} from '@mui/icons-material'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className='sidebarTitle'>DashBoard</h3>
                <ul>
                    <li className='sidebarListItem'>
                        <LineStyle/>
                        Home
                    </li>
                    <li className='sidebarListItem'>
                        <Timeline/>
                        Estadisticas
                    </li>
                    <li className='sidebarListItem'>
                        <TrendingUp/>
                        Ventas
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar