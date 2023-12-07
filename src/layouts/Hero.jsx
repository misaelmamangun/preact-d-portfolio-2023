// Models
import setting from "src/schemas/settings.json";
// Assets
import logo from "src/assets/img/logo.png";

const Hero = () => {
  return (
    <>
      <div className="md:h-screen">
        <div className="container mx-auto px-4 h-full">
          <div className="md:grid items-center grid-cols-2 h-full h-full gap-4">
            <div>
              <h1 className="lg:text-7xl md:text-5xl md:mt-0 text-4xl mt-4 uppercase text-light-400 border-b-4 mb-4">
                Misael Paul Mamangun
              </h1>
              <p className="text-light-400 font-bold">{setting.description}</p>
            </div>
            <div className="flex justify-center">
              <img className="w-3/5" src={logo} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
