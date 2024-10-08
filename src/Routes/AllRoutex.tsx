import { BrowserRouter, Routes, Route } from "react-router-dom";
import EcologyCheck from "../Pages/EcologyCheck";
import SignIn from  "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import Layouts from "../Layout/Layouts";
import Home from "../Pages/Home";
import FindBooking from "../Pages/FindBooking";
import ForgotPassword from "../Pages/ForgotPassword";
import ChangePassword from "../Pages/ChangePassword";
import MainCategory from "../Pages/MainCategory";
import Product from "../Pages/Product";
import About from "../Pages/About";
import BlogPage from "../Pages/BlogPage";
import Blogs from "../Pages/Blogs";
import ContactUs from "../Pages/ContactUs";
import FoundersMessage from "../Pages/FoundersMessage";
import TermConditions from "../Pages/TermConditions";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import RefundPolicy from "../Pages/RefundPolicy";
import MarketplaceServices from "../Pages/MarketplaceServices";
import JoinMarketplace from "../Pages/JoinMarketplace";
import SupplierPolicy from "../Pages/SupplierPolicy";
import SupplierAcceptablePolicy from "../Pages/SupplierAcceptablePolicy";
import Cart from "../Pages/Cart";
import Wishlists from "../Pages/Wishlists";
import ScrollToTop from "../Components/ScrollToTop";

export default function AllRoutes() {
  return (
    <BrowserRouter>
    {/* <ScrollRestoration/> */}
        <ScrollToTop />
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/signup" element= {<SignUp />} />
          <Route path="/forgot-password" element= {<ForgotPassword />} />
          <Route path="/change-password" element={<ChangePassword /> } />
          <Route path="/" element={<Layouts />}>
          <Route path="/" element={ <Home /> }/>
          <Route path="/ecology-check" element={ <EcologyCheck />  } />
          <Route path="/find-booking" element={ <FindBooking /> } />
          <Route path="/category/:categoryId" element={<MainCategory /> } />
          <Route path="/product/:productId" element={<Product product={{
            id: 0,
            name: "",
            image: ""
          }}/> } />
          <Route path="/view-blogs/:blogId" element={<BlogPage/> } />
          <Route path="/about" element={<About /> } />
          <Route path="/blogs" element={<Blogs /> } />
          <Route path="/contact-us" element={<ContactUs /> } />
          <Route path="/founder-message" element= {<FoundersMessage /> } />
          <Route path="/term-conditions" element={<TermConditions /> } />
          <Route path="/privacy-policy" element={<PrivacyPolicy /> } />
          <Route path="/refund-policy" element={<RefundPolicy /> } />
          <Route path="/marketplace-services" element={<MarketplaceServices /> } />
          <Route path="/join-marketplace" element={<JoinMarketplace /> } />
          <Route path="/supplier-policy" element={<SupplierPolicy /> } />
          <Route path="/supplier-acceptable-policy" element={<SupplierAcceptablePolicy /> } />
          <Route path="/cart" element= {<Cart /> } />
          <Route path="/wishlists" element={<Wishlists/> } />

          </Route>
        </Routes>
      </BrowserRouter>
  )
}
