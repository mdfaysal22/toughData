import Banner from '@/components/Banner'
import Navbar from '@/components/Navbar'
import Join from '@/components/Join'
import Discover from '@/components/Discover'
import Label from '@/components/Label'
import Analytics from '@/components/Analytics'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'

export default function Home() {
  return (
    <>
    <div className="w-[1440px] mx-auto">
      <div className="w-[90rem] mx-auto">
      <Navbar/>
      <Banner/>
      </div>
      
    </div>
    <Join/>
    <div className="w-[90rem] mx-auto">
      <Discover/>
      <Label/>
    </div>
    <Analytics/>
    <FAQ/>
    <Footer/>
    </>

  )
}
