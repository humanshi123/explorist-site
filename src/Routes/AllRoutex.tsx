import { BrowserRouter, Routes, Route } from "react-router-dom";
import EcologyCheck from "../Pages/EcologyCheck";
import SignIn from  "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import Layouts from "../Layout/Layouts";
import Home from "../Pages/Home";
import FindBooking from "../Pages/FindBooking";

export default function AllRoutes() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
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
              path="/signup"
              element={ <SignUp />
              }
            />
            <Route
              path="/find-booking"
              element={ <FindBooking />
              }
            />
          
         
          </Route>
        </Routes>
      </BrowserRouter>
  )
}
