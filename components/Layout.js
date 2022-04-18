import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout ({ children }) {
  return (
    <div className="content">
      <Navbar></Navbar>
      { children }
      <Footer></Footer>
    </div>
  )
}