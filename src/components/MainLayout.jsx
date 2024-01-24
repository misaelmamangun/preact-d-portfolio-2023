// UI Components
import Footer from "src/components/Footer";
import Header from "src/components/Header";

/**
 * Render the main layout of the application.
 *
 * @param {Object} props - The props object containing the children and className properties.
 * @param {ReactNode} props.children - The children elements to be rendered within the layout.
 * @param {string} props.className - The additional class name to be applied to the main container.
 * @return {ReactNode} The rendered main layout.
 */
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
