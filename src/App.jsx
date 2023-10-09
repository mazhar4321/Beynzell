import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/navbar/Navbar'
import Home from './Pages/Home'
import Footer from './component/footer/Footer'
import Setting from './Pages/Setting'
import Payment from './Pages/Payment'
import PaymentHistory from './Pages/PaymentHistory'
import TermsAndConditions from './Pages/TermsAndConditions'
import Faq from './Pages/FAQ'
import ReportIssue from './Pages/ReportIssue'
import SearchResults from './Pages/SearchResults'
import UsedCars from './Pages/usedCars'
import Properties from './Pages/Properties'
import LandingPage from './Pages/LandingPage'
import SellerDetails from './Pages/SellerDetails'
import MyProfile from './Pages/MyProfile'
import Favorites from './Pages/Favorites'
import AdsPost from './Pages/AdsPost'
import PostAdNavbar from './component/navbar/PostAdNavbar'
import MyAds from './Pages/MyAds'
import Packages from './Pages/Packages'
import Upgrade from './Pages/Upgrade'
import Dashboard from './Pages/Corporate/Dashboard/Dashboard'
import CorporateDashboardNavbar from './component/navbar/CorporateDashboardNavbar'
import CorporatePostAds from './Pages/Corporate/Dashboard/PostAds'
import Draft from './Pages/Corporate/Dashboard/Draft'
import CorporateNavbar from './component/navbar/CorporateNavbar'
import CorporateHome from './Pages/Corporate/Website/Home'
import JoinCorporate from './Pages/Corporate/Website/JoinCorporate'
import Login from './Pages/Corporate/Auth/Login'
import UploadCSV from './Pages/Rough'
import MultiStepProcess from './Pages/Corporate/Dashboard/UploadAds'
import PaymentMethod from './Pages/Corporate/Dashboard/Payment'



function App() {

  return (
   <>
   <Routes>
        <Route path="/*" element={<MainRoutes />} />
        <Route path="/corporates/*" element={<CorporateDashboardRoutes />} />
        <Route path="/category/*" element={<AdsPostRoutes />} />
        <Route path="/corporate/*" element={<CorporateWebRoutes />} />
      </Routes>
   </>
  )
}
const MainRoutes = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/seller-detail" element={<SellerDetails />} />
      <Route path="/profile" element={<MyProfile />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/payments" element={<Payment />} />
      <Route path="/paymenthistory" element={<PaymentHistory />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/termsandconditions" element={<TermsAndConditions />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/reportissue" element={<ReportIssue />} />
      <Route path="/searchResults" element={<SearchResults />} />
      <Route path="/usedCars" element={<UsedCars />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/landingPage" element={<LandingPage />} />
      <Route path="/myads" element={<MyAds />} />
      <Route path="/upgrade" element={<Upgrade />} />
      
    </Routes>
    <Footer/>
  </div>
);
const AdsPostRoutes = () => (
  <div>
    <PostAdNavbar/>
    <Routes>
    <Route path="/:categoryName/:detailName" element={<AdsPost />} />
    </Routes>
  </div>
);

const CorporateDashboardRoutes = () => (
  <div>
    <CorporateDashboardNavbar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/Ads" element={<CorporatePostAds />} />
      <Route path="/draft" element={<Draft />} />
      <Route path="/uploadsAds" element={<MultiStepProcess />} />
      <Route path="/payment" element={<PaymentMethod />} />
      {/* Define other routes specific to CorporateDashboard here */}
    </Routes>
  </div>
);
const CorporateWebRoutes = () => (
  <div>
   
    <Routes>
      <Route path="/" element={
      <div>
         <CorporateNavbar />
         <CorporateHome />
         <div className='bg-[#F2F4F7]'>
    <Footer/>
    </div>
      </div>
      }
      />
      <Route path="/join-corporate" element={
      <div>
         <JoinCorporate />
      </div>
      }
      />
      <Route path="/login" element={
      <div>
         <Login />
      </div>
      }
      />
      {/* Define other routes specific to CorporateDashboard here */}
    </Routes>
    
  </div>
);
export default App