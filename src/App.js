import "./App.css";
import Navbar from "./component/navBar";
import lady from "../src/images/lady3.png";
import arrow from "../src/images/arrow.svg";
import Activity from "../src/images/Activity.svg";
import Heart from "../src/images/Heart.png";
import Work from "../src/images/Work.png";
import project from "../src/images/project.png";
import rating from "../src/images/rating.png";
import raise from "../src/images/raise.png";
import time from "../src/images/time.png";
import digital from "../src/images/digital.png";
import digital2 from "../src/images/digital2.png";
import digital3 from "../src/images/digital3.png";
import digital4 from "../src/images/digital4.png";
import Carousel from "./component/carousel";
import SearchInput from "../src/component/searchInput";
import Footer from "../src/component/footer";
import Scroll from "./component/scrollLogos";


function App() {
  const textStyle = {
    left: "-26px",
  };
  const textStyle2 = {
    left: "-12px",
  };
  const rate = {
    left: "32em",
  };
  const rate2 = {
    left: "29.2em",
  };
  const rate3 = {
    left: "15em",
  };
  const raise1 = {
    left: "48em",
  };
  const raise2 = {
    left: "46em",
  };
  const raise3 = {
    left: "30.5em",
  };
  const time1 = {
    left: "64em",
  };
  const time2 = {
    left: "62.3em",
  };
  const time3 = {
    left: "47em",
  };
  const digitalpx = {
    left: "42.5em",
  };
  const digitalpx3 = {
    left: "39em",
    top: "136.5em",
  };
  const digitalpx2 = {
    top: "125em",
  };
  const dig1 = {
    top: "113em",
  };
  const dig1h = {
    top: "110.5em",
  };
  const dig2 = {
    top: "125em",
    left: "38.5em",
  };
  const dig2h = {
    top: "122em",
    left: "38.5em",
  };
  const dig3h = {
    top: "155em",
  };
  const dig3 = {
    top: "157.5em",
  };
  const dig4h = {
    top: "155em",
    left: "38.5em",
  };
  const dig4 = {
    top: "157.5em",
    left: "38.5em",
  };
  const dv = {
    top: "55em",
  };
  const scroll = {
    top: "12em",
  };
  const project1 = {
    left: "16em",
  };

  return (
    <div className="App">
      <Navbar />

      <div className="flex items-center bg-green-100 mt-16 justify-center">
        <div className="flex flex-col items-start mb-10 mr-20">
          <p className="text-4xl font-bold font-Poppins text-black text-left">
            Increase Your
            <br />
            Customers Loyalty
            <br />
            and Satisfaction
            <br />
          </p>
          <p className="text-black font-Avenir text-base font-normal leading-normal text-left mt-2">
            We help businesses like yours earn more customers,
            <br />
            stand out from competitors, and make more money
          </p>

          <button className="bg-green-600 border border-1 border-green-600 rounded-lg py-2 px-3 text-white custom-link-style mt-4">
            Get Started
          </button>
        </div>
        <img src={lady} alt="lady with laptop" style={{ width: "650px" }} />
      </div>

      <div className=" mt-4 mb-4">
        <Scroll />
      </div>
      <div className="h-6 bg-green-100"></div>

      <div className="h-80 bg-white-100 mx-auto max-w-5xl md:ml-16 lg:ml-8">
        <p className="text-green-600 text-4 font-medium uppercase mt-12 text-left ml-16">
          what we do
        </p>
        <p className="text-left ml-16 mt-14 font-Poppins text-black font-bold mt-4">
          We provide the Perfect Solution
          <br />
          to your business growth
        </p>
      </div>

      <div className="mx-auto max-w-5xl flex space-x-20 mb-10 -mt-32">
        <div>
          <img className="ml-28 mb-4 h-16" src={Activity} alt="activity" />
          <p className="font-bold text-left ml-28 -mb-10">Grow Your Business</p>
          <p className="text-left ml-28 mt-14 font-Poppins leading-6">
            <span className="text-20">
              We help identify the best ways to
              <br />
              improve your business
              <br />
            </span>
          </p>
          <p className="text-left ml-32 mt-8 flex cursor-pointer">
            Learn More <img className="ml-2 h-3 mt-1.5" src={arrow} />
          </p>
        </div>

        <div>
          <img className="ml-28 mb-4 h-16" src={Heart} alt="activity" />
          <p className="font-bold text-left ml-28 -mb-10">
            Improve Brand Loyalty
          </p>
          <p className="text-left ml-28 mt-14 font-Poppins leading-6">
            <span className="text-20">
              We help identify the best ways to
              <br />
              improve your business
              <br />
            </span>
          </p>
          <p className="text-left ml-32 mt-8 flex cursor-pointer">
            Learn More <img className="ml-2 h-3 mt-1.5" src={arrow} />
          </p>
        </div>

        <div>
          <img className="ml-28 mb-4 h-16" src={Work} alt="activity" />
          <p className="font-bold text-left ml-28 -mb-10">
            Improve Business Model
          </p>
          <p className="text-left ml-28 mt-14 font-Poppins leading-6">
            <span className="text-20">
              We help identify the best ways to
              <br />
              improve your business
              <br />
            </span>
          </p>
          <p className="text-left ml-32 mt-8 flex cursor-pointer">
            Learn More <img className="ml-2 h-3 mt-1.5" src={arrow} />
          </p>
        </div>
      </div>

      <div className="h-60 bg-gray-50 mx-auto max-w-10xl flex justify-center mb-10">
        <img
          className="absolute mt-16 h-16"
          style={project1}
          src={project}
          alt="project"
        />
        <p className="absolute ml-56 mt-36" style={textStyle2}>
          Completed projects
        </p>
        <p
          className="absolute ml-72 text-green-600 font-bold mt-44"
          style={textStyle}
        >
          100 +
        </p>

        <img
          className="absolute mt-16 h-16"
          style={rate}
          src={rating}
          alt="rating"
        />
        <p className="absolute mt-36" style={rate2}>
          Customer Satisfaction
        </p>
        <p
          className="absolute ml-72 text-green-600 font-bold mt-44"
          style={rate3}
        >
          20 %
        </p>

        <img
          className="absolute mt-16 h-16"
          style={raise1}
          src={raise}
          alt="rating"
        />
        <p className="absolute mt-36" style={raise2}>
          Raised by Clients
        </p>
        <p
          className="absolute ml-72 text-green-600 font-bold mt-44"
          style={raise3}
        >
          $10M
        </p>

        <img
          className="absolute mt-16 h-16"
          style={time1}
          src={time}
          alt="rating"
        />
        <p className="absolute mt-36" style={time2}>
          Years in Business
        </p>
        <p
          className="absolute ml-72 text-green-600 font-bold mt-44"
          style={time3}
        >
          2 yrs
        </p>
      </div>

      <div className="h-80 bg-white">
        <p className="absolute mt-20 text-green-600 text-4 font-medium uppercase text-left ml-16">
          our portfolio
        </p>
        <p className="absolute text-left ml-16 mt-28 font-Poppins text-black font-bold">
          We provide the Perfect Solution
          <br />
          to your business growth
        </p>
        <div className="flex">
          <img src={digital2} alt="digital2" className="absolute mt-52 ml-16" />
          <p
            className="absolute text-left ml-16 mt-80 font-Poppins text-black font-bold"
            style={dig1h}
          >
            Digital Marketing Agency Website
          </p>
          <br />
          <p
            className="absolute text-left ml-16 mt-80 font-Poppins text-black"
            style={dig1}
          >
            This is a website for a client who want to achieve their goals and
            meet their users
            <br />
            needs while also increasing their reach. Accross all platforms.
            <br />
            This is a website rebrand
            <br />
          </p>
          <img
            src={digital3}
            alt="digital3"
            className="absolute mt-52 ml-100"
            style={digitalpx}
          />
          <p
            className="absolute text-left ml-16 mt-80 font-Poppins text-black font-bold"
            style={dig2h}
          >
            Digital Marketing Agency Website
          </p>
          <br />
          <p
            className="absolute text-left ml-16 mt-80 font-Poppins text-black"
            style={dig2}
          >
            This is a website for a client who want to achieve their goals and
            meet their users
            <br />
            needs while also increasing their reach. Accross all platforms.
            <br />
            This is a website rebrand
            <br />
          </p>
          <img
            src={digital4}
            alt="digital4"
            className="absolute mt-60 ml-16"
            style={digitalpx2}
          />
          <p
            className="absolute text-left ml-16 mt-80 font-Poppins text-black font-bold"
            style={dig3h}
          >
            Digital Marketing Agency Website
          </p>
          <br />
          <p
            className="absolute text-left ml-16 mt-80 font-Poppins text-black"
            style={dig3}
          >
            This is a website for a client who want to achieve their goals and
            meet their users
            <br />
            needs while also increasing their reach. Accross all platforms.
            <br />
            This is a website rebrand
            <br />
          </p>
          <img
            src={digital}
            alt="digital"
            className="absolute mt-60 ml-16"
            style={digitalpx3}
          />
          <p
            className="absolute text-left ml-16 mt-80 font-Poppins text-black font-bold"
            style={dig4h}
          >
            Digital Marketing Agency Website
          </p>
          <br />
          <p
            className="absolute text-left ml-16 mt-80 font-Poppins text-black"
            style={dig4}
          >
            This is a website for a client who want to achieve their goals and
            meet their users
            <br />
            needs while also increasing their reach. Accross all platforms.
            <br />
            This is a website rebrand
            <br />
          </p>
        </div>
      </div>
      <div className="bg-white relative mt-80 h-60" style={dv}>
        <p className="absolute mt-8 text-green-600 text-4 font-medium uppercase text-left ml-16">
          testimonials
        </p>
        <p className="absolute text-left ml-16 mt-16 font-Poppins text-black font-bold">
          See What Our Customer
          <br />
          Say About Us
        </p>
        <div className="relative ml-16 bg-black-500 mt-80" style={scroll}>
          <Carousel />
        </div>
        <div className="relative ml-18 mt-60 ml-16 mr-16 h-40">
          <h4 className="text-center text-green-600">SUBSCRIBE</h4>
          <p className="text-center font-bold">
            Subscribe to get the latest
            <br />
            news about us
          </p>
          <br />
          <p className="text-center -mt-5 text-[#8B8B8B] text-sm">
            Please drop your email below to get daily update about what we do
          </p>
          <div className="flex justify-center items-center mt-3">
            <SearchInput />
          </div>
        </div>
        <div className="mt-12">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;