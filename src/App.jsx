import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DataTable from './componant/Pages/Table/TableData'
import Login from './componant/Authentication/Login'
// import MiniDrawer from './componant/sidebar'
// import PersistentDrawerLeft from './componant/sidebar1'
// import AccountMenu from './componant/useroption'
// import CssSidebar from './css/Sidebar'
// import ResponsiveDrawer from './componant/sidebar1'
import Layout from './outlet/Layout'
import Authlauout from './outlet/Authlauout'
import Profile from './componant/Pages/Profile/Profile'
import SignUp from './componant/Authentication/SignUp'
import { ToastContainer } from 'react-toastify'
import ForgotPassword from './componant/Authentication/ForgotPassword'
import DashBoard from './componant/Pages/DashBoard/DashBoard'
import UserSection from './componant/Pages/UserSection/DataTableComponent'
// import DashBoardPage from './componant/Pages/DashBoard/DashBoard'

function App() {

  const user = JSON.parse(localStorage.getItem('user'));


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={`/*`} element={<Authlauout />}>
            <Route path='login' element={<Login />} />
            <Route path='SignUp' element={<SignUp />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Route>

          <Route path='/*' element={<Layout />} >
            <Route path='' element={<DashBoard />} />
            <Route path='DashBoard' element={<DashBoard />} />
            <Route path='Profile' element={<Profile user={user} />} />
            <Route path='TableData' element={<DataTable />} />
            <Route path='UserSection' element={<UserSection />} />
          </Route>

        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
