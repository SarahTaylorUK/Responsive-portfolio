import JavaScript from "../assets/javascript.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import node from "../assets/node.png";
import psql from "../assets/psql.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";

const Tech = () => {
  return (
    <div name="tech" className="bg-[#0a192f]  text-gray-300 w-full h-screen">
      {/* CONTAINER */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Technologies
          </p>
          <p className="py-4"> A few technologies I've worked with...</p>
        </div>
        {/* ICONS */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={JavaScript}
              alt="Javascript icon"
              className="w-20 mx-auto"
            />
            <p className="my-4 ">Javascript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={node} alt="Node.js icon" className="w-20 mx-auto" />
            <p className="my-4 ">Node.js</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={psql} alt="PostgreSQL icon" className="w-20 mx-auto" />
            <p className="my-4 ">PostgreSQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={react} alt="React icon" className="w-20 mx-auto" />
            <p className="my-4 ">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={html} alt="HTML5 icon" className="w-20 mx-auto" />
            <p className="my-4 ">HTML5</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={css} alt="CSS3 icon" className="w-20 mx-auto" />
            <p className="my-4 ">CSS3</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={tailwind} alt="Tailwind icon" className="w-20 mx-auto" />
            <p className="my-4 ">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={github} alt="Github icon" className="w-20 mx-auto" />
            <p className="my-4 ">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
