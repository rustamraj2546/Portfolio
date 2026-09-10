import Catchme from "./Catchme";
import Mydesc from "./Mydesc";
import Project from "./Project";
import Skill from "./Skill";

const Body = () => {
  return (
    <div className="body py-10 flex flex-col justify-center items-center mb-8">
      <Mydesc />
      
      <div className="featured-container w-4/6 h-full">
        <div className="featured-proj w-full mb-16">
          
          <div className="heading flex justify-between">
            <h3 className="tracking-wider uppercase">Featured Projects</h3>
            <h3 className="bg-gradient-to-r bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text text-xs">
              <a href="/projects">All Projects ▸</a>
            </h3>
          </div>
          
          <div className="projects flex flex-row flex-wrap justify-around w-full">
            <Project />
            <Project />
            <Project />
            <Project />
          </div>

        </div>

        <div className="skill flex flex-col flex-wrap mb-16">
          
          <div className="heading">
            <h1 className="tracking-wider uppercase">Skills</h1>
          </div>

          <div className="w-full overflow-hidden">
            <Skill />
          </div>

        </div>
      </div>

      <div className="w-4/6 overflow-hidden">
        <Catchme />
      </div>
      
    </div>
  );
};

export default Body;
