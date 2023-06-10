import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import LayoutApp from "./pages/layout";
import CaseDetailsPage from "./pages/casedetailspage";
import CasePage from "./pages/casespage";
import Login from "./pages/loginpage";
import SignUp from "./pages/signuppage";
import SolutionPage from "./pages/solutionspage";
import ScrollToTop from "./shared/scrolltotop";
import AppointmentsPage from "./pages/appointmentspage";
import AuthProvider from "./shared/authcontext";
import ResetPassword from "./pages/resetpasswordpage";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LayoutApp />}>
              <Route path="/" element={<HomePage />} />
              <Route path="casesPage" element={<CasePage />} />
              <Route path="casesPage/:caseID" element={<CaseDetailsPage />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="resetpassword" element={<ResetPassword />} />
              <Route path="solutions" element={<SolutionPage />} />
              <Route path="appointments" element={<AppointmentsPage />} />
              <Route path="*" element={<div>Error</div>} />
            </Route>
          </Routes>
        </AuthProvider>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Router;
