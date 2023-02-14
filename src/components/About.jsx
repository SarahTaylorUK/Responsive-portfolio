const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#c3fc3d]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Junior FullStack Developer</p>
          </div>
          <div>
            <p>
              {" "}
              I developed a passion for coding seeing what tech can achieve when
              utilised in my previous roles as a researcher.
            </p>
            <p>
              Solving logic problems and implementing neat solutions motivated
              me to start coding in 2021, with an introductory python course.
              Finally, I took the leap and accepted a scholarship for
              Northcoders software development course.
            </p>
            <p>
              {" "}
              I love to learn, and am excited to maintain the momentum in my new
              role as FullStack Javascript Developer at Informa.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
