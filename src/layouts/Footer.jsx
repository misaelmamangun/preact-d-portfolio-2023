// Models
import settings from "src/schemas/settings.json";

const Footer = () => {
  const { author } = settings;

  return (
    <>
      <footer className="border-t-2">
        <div className="container mx-auto px-4 py-4">
          <p className="text-light-400">
            &copy; {`${new Date().getFullYear()} - ${author}`}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
