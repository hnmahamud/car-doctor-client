import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="md:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="absolute right-5 top-1/2 w-1/2 border-8 border-white rounded-lg shadow-2xl"
          />
        </div>

        <div className="md:w-1/2 mt-12 md:mt-0">
          <h4 className="text-[#FF3811] text-xl font-bold">About Us</h4>
          <h2 className="text-[#151515] text-3xl md:text-5xl font-bold">
            We are qualified & of experience in this field
          </h2>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <button className="bg-[#FF3811] btn btn-error text-white mt-4">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
