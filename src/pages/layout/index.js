import { Outlet } from "react-router-dom";
import { Layout, Space } from "antd";
import HeaderApp from "../../shared/header";
import FooterApp from "../../shared/footer";
const { Header, Footer, Sider, Content } = Layout;
const LayoutApp = () => {
  return (
    <Layout>
      <Header>
        <HeaderApp />
      </Header>
      <Outlet />
      <Footer>
        <FooterApp/>
      </Footer>
    </Layout>
  );
};

export default LayoutApp;
