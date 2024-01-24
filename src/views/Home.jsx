// UI Components
import RecentWork from "src/components/RecentWork";
import MainLayout from "src/components/MainLayout";
import Hero from "src/components/Hero";

const Main = () => {
  return (
    <MainLayout className="pb-4">
      <Hero />
      <RecentWork />
    </MainLayout>
  );
};

export default Main;
