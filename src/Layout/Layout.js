import Footer from "../components/Footer";
import Header from "../components/Header";
import PayDtail from "../components/PayDtail";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container flex justify-center flex-col items-center w-full mx-auto px-5">
        {children}
      </main>
     
      <Footer />
    </>
  );
};

export default Layout;
