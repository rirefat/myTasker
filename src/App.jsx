import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import TaskBoard from "./components/TaskBoard/TaskBoard";


const App = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <HeroSection />
      <TaskBoard />
    </div>
  );
};

export default App;