import { Outlet } from "react-router-dom"
import { Navbar } from "./"
import { UserProvider } from "./context/UserProvider"

export const MainApp = () => {
    return (
        <UserProvider>
            {/* <h1>Main App</h1> */}

            <Navbar/>
            <hr />

            <Outlet />
        </UserProvider>
    )
}
