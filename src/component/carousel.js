import Card from "./card";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function Carousel() {

    const arrow = {
        bottom: '20em'
    }

const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 400;
}
const scrollRight = () => {
    document.getElementById("content").scrollLeft += 400;
}


  return (
    <div className="relative">
      {/* <div className="text-center py-4  text-xl font-bold">Carousel</div> */}
      <div className="absolute right-0 bottom-80" style={arrow}>
        <button onClick={scrollLeft} className="p-2 m-2 bg-green-100 rounded-full">
          <FiChevronLeft />
        </button>
        <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-green-100 mr-14">
          <FiChevronRight />
        </button>
      </div>
      <div id="content" className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide mr-12">
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Carousel;