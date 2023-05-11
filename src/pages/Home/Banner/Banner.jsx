import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[400px] md:h-[calc(100vh-96px)]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-lg" />
        <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute flex items-center gap-4 left-0 top-0 h-full rounded-lg">
          <div className="text-white space-y-7 md:w-[50%] ml-2 md:ml-12">
            <h2 className="text-3xl md:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-4">
              <button className="bg-[#FF3811] btn btn-error text-white">
                Discover More
              </button>
              <button className="btn glass">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-4 right-1 bottom-1 md:right-20 md:bottom-20">
          <a href="#slide4" className="btn glass btn-circle">
            ❮
          </a>
          <a
            href="#slide2"
            className="bg-[#FF3811] btn btn-circle btn-error text-white"
          >
            ❯
          </a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-lg" />
        <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute flex items-center gap-4 left-0 top-0 h-full rounded-lg">
          <div className="text-white space-y-7 md:w-[50%] ml-2 md:ml-12">
            <h2 className="text-3xl md:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-4">
              <button className="bg-[#FF3811] btn btn-error text-white">
                Discover More
              </button>
              <button className="btn glass">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-4 right-1 bottom-1 md:right-20 md:bottom-20">
          <a href="#slide1" className="btn glass btn-circle">
            ❮
          </a>
          <a
            href="#slide3"
            className="bg-[#FF3811] btn btn-circle btn-error text-white"
          >
            ❯
          </a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-lg" />
        <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute flex items-center gap-4 left-0 top-0 h-full rounded-lg">
          <div className="text-white space-y-7 md:w-[50%] ml-2 md:ml-12">
            <h2 className="text-3xl md:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-4">
              <button className="bg-[#FF3811] btn btn-error text-white">
                Discover More
              </button>
              <button className="btn glass">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-4 right-1 bottom-1 md:right-20 md:bottom-20">
          <a href="#slide2" className="btn glass btn-circle">
            ❮
          </a>
          <a
            href="#slide4"
            className="bg-[#FF3811] btn btn-circle btn-error text-white"
          >
            ❯
          </a>
        </div>
      </div>

      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-lg" />
        <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute flex items-center gap-4 left-0 top-0 h-full rounded-lg">
          <div className="text-white space-y-7 md:w-[50%] ml-2 md:ml-12">
            <h2 className="text-3xl md:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-4">
              <button className="bg-[#FF3811] btn btn-error text-white">
                Discover More
              </button>
              <button className="btn glass">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-4 right-1 bottom-1 md:right-20 md:bottom-20">
          <a href="#slide3" className="btn glass btn-circle">
            ❮
          </a>
          <a
            href="#slide1"
            className="bg-[#FF3811] btn btn-circle btn-error text-white"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
