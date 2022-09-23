// import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#c3fc3d] text-2xl sm:text-4xl"> Hi there! I'm</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[white]">
          {" "}
          Sarah Taylor
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#deff91]">
          {" "}
          Full-stack developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Full-stack developer based in Scotland, with a background in Earth Science research.
        </p>
        {/* <div>
          <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#3ab642] hover:border-[#3ab642] duration-200">
            {" "}
            View Projects
            <span className="group-hover:rotate-90 duration-200">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
