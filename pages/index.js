// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <h1>HomePage</h1>
      <Link href="/ninja/ninjas"><a>See Ninja Listing</a></Link>
      {/* <Footer></Footer> */}
    </div>
  )
}
