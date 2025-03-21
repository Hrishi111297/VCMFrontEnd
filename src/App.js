import About from "./Components/About";
import FacilityCards from "./Components/FacilityCards";
import Header from "./Components/Header";
import SlideShow from "./Components/SlideShow";
import Courses from "./Components/Courses";
import Achiewments from "./Components/Achiewments";
import Staff from "./Components/Staff";
import Footer from "./Components/Footer";




function App() {
  return (
    <div className="bg-white ">
      <Header />
      <SlideShow />
      <FacilityCards />
      <About />
      <Courses />
      <Achiewments />
      <Staff />
      <Footer></Footer>
    </div>
  );
}

export default App;
