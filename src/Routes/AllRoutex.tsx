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

export default function AllRoutes() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/signup" element= {<SignUp />} />
          <Route path="/forgot-password" element= {<ForgotPassword />} />
          <Route path="/change-password" element={<ChangePassword /> } />
          <Route path="/" element={<Layouts />}>
          <Route
              path="/"
              element={ <Home />  }
            />
            <Route
              path="/ecology-check"
              element={ <EcologyCheck />  } 
            />
            <Route
              path="/find-booking"
              element={ <FindBooking />
              }
            />
            <Route path="/category/:categoryId" element={<MainCategory /> } />
           <Route path="/product/:productId" element={<Product/> } />
         
          </Route>
        </Routes>
      </BrowserRouter>
  )
}
