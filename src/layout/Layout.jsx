import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Merci from '../components/Merci'



export default function Layout() {
    return(
        <div id="layout">
            <Navbar/>
            <Outlet/>
            <Footer/>
            <Merci/>
        </div>
    )
}