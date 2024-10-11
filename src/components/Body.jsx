import Mydesc from "./Mydesc";
import Project from "./Project";
import Skill from "./Skill";

const Body = () => {
  return (
    <div className="body py-10 flex flex-col justify-center items-center">
      <Mydesc />

      <div className="featured-container bg-secondary-color w-4/6 h-full">
        <div className="featured-proj">
          <div className="heading flex justify-between">
            <h3 className="tracking-wider">FEATURED PROJECTS</h3>
            <h3 className="text-red-500 text-xs"><a href="/projects">All Projects ▸</a></h3>
          </div>

          <Project />
        </div>

        <div className="skill">
          <h1>Moving Skills Card</h1>
          <Skill />
        </div>
      </div>

      <div className="feedback bg-slate-500 w-4/6">
        <h1>Feedback Form Card</h1>
      </div>
    </div>
  );
};

export default Body;
