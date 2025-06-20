import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Merci from '../pages/Merci'



export default function Layout() {
    return(
        <div id="layout">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}