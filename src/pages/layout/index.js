import { Outlet } from "react-router-dom";
import HeaderApp from "../../shared/header";
import FooterApp from "../../shared/footer";
const LayoutApp = () => {
  return (
    <>
      <HeaderApp />
      <Outlet />
      <FooterApp />
    </>
  );
};

export default LayoutApp;
