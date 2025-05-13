import About from "./About";
import FacilityCards from "./FacilityCards";
import Header from "./Header";
import SlideShow from "./SlideShow";
import Courses from "./Courses";
import Achiewments from "./Achiewments";
import Staff from "./Staff";
import Footer from "./Footer";

function Home() {
  return (
    <div className="bg-white text-black">
      <Header />
      <SlideShow />
      <FacilityCards />
      <About />
      <Courses />
      <Achiewments />
      <Staff />
    </div>
  );
}

export default Home;
