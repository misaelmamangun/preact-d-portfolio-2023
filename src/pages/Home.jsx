// UI Components
import RecentWork from "src/components/RecentWork";
import MainLayout from "src/layouts/Main";
import Hero from "src/layouts/Hero";

const Main = () => {
  return (
    <MainLayout className="pb-4">
      <Hero />
      <RecentWork />
    </MainLayout>
  );
};

export default Main;
