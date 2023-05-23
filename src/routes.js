import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import LayoutApp from "./pages/layout";
import CaseDetailsPage from "./pages/casedetailspage";
import CasePage from "./pages/casespage";
import Login from "./pages/loginpage";
import SignUp from "./pages/signuppage";
import SolutionPage from "./pages/solutionspage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutApp />}>
          <Route path="/" element={<HomePage />} />
          <Route path="casePage" element={<CasePage />}>
            <Route path=":caseDetails" element={<CaseDetailsPage />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="solutions" element={<SolutionPage />} />
          <Route path="*" element={<>Error</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
