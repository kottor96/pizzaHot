import { Outlet } from 'react-router-dom'

export default function Layout(params) {
    return(
        <div id="layout">
            <Outlet/>
        </div>
    )
}