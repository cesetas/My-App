import Navbar from "./Navbar";
import Footer from "./Footer";
import Appbar from "./Appbar";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Appbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
