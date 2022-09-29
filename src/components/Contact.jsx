import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div name="contact" className="bg-[#0a192f]  text-gray-300 w-full h-screen">
      {/* CONTAINER */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#c3fc3d]">
            Get in touch
          </p>
          <p className="py-4">
            {" "}
            Feel free to contact me on my socials, or drop me an email.
          </p>
        </div>
        {/* ICONS */}
        <div className="py-8">
          <ul className="flex">
            <li>
              <a
                href="https://www.linkedin.com/in/sarah-taylor-swe/"
                className="flex justify-between items-center w-full text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  size={50}
                  className="hover:text-[#c3fc3d] duration-200"
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/SarahADev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  size={50}
                  className="hover:text-[#c3fc3d] duration-200"
                />
              </a>
            </li>
            <li>
              <a
                href="mailto:sarah.alexandra12@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HiOutlineMail
                  size={50}
                  className="hover:text-[#c3fc3d] duration-200"
                />
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/document/d/1gutjAnCx8X_INL3Xy8rw6qbarJd1Pg3x-PlNNlZXswk/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFillPersonLinesFill
                  size={50}
                  className="hover:text-[#c3fc3d] duration-200"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
