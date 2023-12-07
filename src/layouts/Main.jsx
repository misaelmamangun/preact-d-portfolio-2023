// UI Components
import Footer from "src/layouts/Footer";
import Header from "src/layouts/Header";

const MainLayout = ({ children, className }) => {
  return (
    <>
      <Header />
      <main className={`min-h-screen ${className}`}>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
