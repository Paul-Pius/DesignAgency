import React from "react";
import Card from "./card";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function Carousel() {
    const scrollLeft = () => {
        document.getElementById("content").scrollLeft -= 400;
    };

    const scrollRight = () => {
        document.getElementById("content").scrollLeft += 400;
    };

    return (
        <div className="flex items-center justify-center">
            <div className="relative max-w-screen-lg">
                <div className="absolute right-0 bottom-80">
                    <button onClick={scrollLeft} className="p-2 m-2 bg-green-100 rounded-full">
                        <FiChevronLeft />
                    </button>
                    <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-green-100">
                        <FiChevronRight />
                    </button>
                </div>
                <div id="content" className="carousel flex overflow-x-auto scroll-smooth scrollbar-hide">
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
        </div>
    );
}

export default Carousel;