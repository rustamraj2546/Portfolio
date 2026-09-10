import "./Skill.css";
import Devicon from "./utils/Devicon";

const Skill = () => {
  return (
    <div className="relative">

      <div className="flex space-x-0 group">
        <div className="flex space-x-12 animate-loop-scroll group-hover:paused">
          <img loading="lazy" src={Devicon.logoReact.logoReact} alt="logoReact" className='w-16 max-w-none' />
          <img loading="lazy" src={Devicon.logoNode.logoNode} alt="logoNode" className='w-16 max-w-none' />
          <img loading="lazy" src={Devicon.logoTailwind.logoTailwind} alt="logoTailwind" className='w-16 max-w-none' />
          <img loading="lazy" src={Devicon.logoMongodb.logoMongodb} alt="logoMongodb" className='w-16 max-w-none' />
          <img loading="lazy" src={Devicon.logoHtml.logoHtml} alt="logoHtml" className='w-16 max-w-none' />
          <img loading="lazy" src={Devicon.logoCss.logoCss} alt="logoCss" className='w-16 max-w-none' />
          <img loading="lazy" src={Devicon.logoJs.logoJs} alt="logoJs" className='w-16 max-w-none' />
          <img loading="lazy" src={Devicon.logoCpp.logoCpp} alt="logoCpp" className='w-16 max-w-none' />
          <img loading="lazy" src={Devicon.logoJava.logoJava} alt="logoJava" className='w-16 max-w-none' />
          <img loading="lazy" src={Devicon.logoPython.logoPython} alt="logoPython" className='w-16 max-w-none' />
          <img loading="lazy" src={Devicon.logoSql.logoSql} alt="logoSql" className='w-16 max-w-none' />
          <img loading="lazy" src={Devicon.logoGit.logoGit} alt="logoGit" className='w-16 max-w-none' />
          {/* <img loading="lazy" src={Devicon.logoGithub.logoGithub} alt="logoGithub" className='w-16 max-w-none' /> */}
        </div>

        <div className="flex space-x-12 animate-loop-scroll group-hover:paused" aria-hidden="true">
          <img loading="lazy" src={Devicon.logoReact.logoReact} alt="logoReact" className='w-16 max-w-none' />
          <img loading="lazy" src={Devicon.logoNode.logoNode} alt="logoNode" className='w-16' />
          <img loading="lazy" src={Devicon.logoTailwind.logoTailwind} alt="logoTailwind" className='w-16 max-w-none' />
          <img loading="lazy" src={Devicon.logoMongodb.logoMongodb} alt="logoMongodb" className='w-16 max-w-none' />
          <img loading="lazy" src={Devicon.logoHtml.logoHtml} alt="logoHtml" className='w-16 max-w-none' />
          <img loading="lazy" src={Devicon.logoCss.logoCss} alt="logoCss" className='w-16 max-w-none' />
          <img loading="lazy" src={Devicon.logoJs.logoJs} alt="logoJs" className='w-16 max-w-none' />
          <img loading="lazy" src={Devicon.logoCpp.logoCpp} alt="logoCpp" className='w-16 max-w-none' />
          <img loading="lazy" src={Devicon.logoJava.logoJava} alt="logoJava" className='w-16 max-w-none' />
          <img loading="lazy" src={Devicon.logoPython.logoPython} alt="logoPython" className='w-16 max-w-none' />
          <img loading="lazy" src={Devicon.logoSql.logoSql} alt="logoSql" className='w-16 max-w-none' />
          <img loading="lazy" src={Devicon.logoGit.logoGit} alt="logoGit" className='w-16 max-w-none' />
        </div>
      </div>

      <div className="h-full w-36 absolute left-0 top-0 z-10 shadow-left"></div>
      <div className="h-full w-36 absolute right-0 top-0 z-10 shadow-right"></div>
    </div>
  );
};

export default Skill;
