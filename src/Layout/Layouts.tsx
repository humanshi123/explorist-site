
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'

export default function Layouts() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
