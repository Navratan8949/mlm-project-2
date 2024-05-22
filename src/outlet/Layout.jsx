import { Outlet } from "react-router-dom"
import ResponsiveDrawer from "../componant/sidebar1"

const Layout = () => {
    return (
        <div>
            <ResponsiveDrawer outlet={<Outlet />} />
        </div>
    )
}

export default Layout
