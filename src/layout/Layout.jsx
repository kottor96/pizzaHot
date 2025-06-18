import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Layout(params) {
    return(
        <div id="layout">
            <Navbar/>
            <Outlet/>
        </div>
    )
}