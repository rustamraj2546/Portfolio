import Devicon from "./utils/Devicon.jsx";

const Techicon = () => {
  return (
    <div className="flex flex-wrap content-around space-x-10">
        <a href="https://react.dev/"><img loading="lazy" src={Devicon.logoReact.logoReact} alt="logoReact" className='w-16 cursor-pointer' /></a>
        <a href="https://nodejs.org/"><img loading="lazy" src={Devicon.logoNode.logoNode} alt="logoNode" className='w-16 cursor-pointer' /></a>
        <a href="https://tailwindcss.com/"><img loading="lazy" src={Devicon.logoTailwind.logoTailwind} alt="logoTailwind" className='w-16 cursor-pointer' /></a>
        <a href="https://www.mongodb.com/"><img loading="lazy" src={Devicon.logoMongodb.logoMongodb} alt="logoMongodb" className='w-16 cursor-pointer' /></a>
        <a href="https://en.wikipedia.org/wiki/HTML"><img loading="lazy" src={Devicon.logoHtml.logoHtml} alt="logoHtml" className='w-16 cursor-pointer' /></a>
        <a href="https://en.wikipedia.org/wiki/CSS"><img loading="lazy" src={Devicon.logoCss.logoCss} alt="logoCss" className='w-16 cursor-pointer' /></a>
        <a href="https://en.wikipedia.org/wiki/JavaScript"><img loading="lazy" src={Devicon.logoJs.logoJs} alt="logoJs" className='w-16 cursor-pointer' /></a>
        <a href="https://en.wikipedia.org/wiki/C%2B%2B"><img loading="lazy" src={Devicon.logoCpp.logoCpp} alt="logoCpp" className='w-16 cursor-pointer' /></a>
        <a href="https://www.java.com/en/"><img loading="lazy" src={Devicon.logoJava.logoJava} alt="logoJava" className='w-16 cursor-pointer' /></a>
        <a href="https://www.python.org/"><img loading="lazy" src={Devicon.logoPython.logoPython} alt="logoPython" className='w-16 cursor-pointer' /></a>
        <a href="https://www.mysql.com/"><img loading="lazy" src={Devicon.logoSql.logoSql} alt="logoSql" className='w-16 cursor-pointer' /></a>
        <a href="https://git-scm.com/"><img loading="lazy" src={Devicon.logoGit.logoGit} alt="logoGit" className='w-16 cursor-pointer' /></a>
        <a href="https://github.com/"><img loading="lazy" src={Devicon.logoGithub.logoGithub} alt="logoGithub" className='w-16 cursor-pointer' /></a>
    </div>
  );
};

export default Techicon;
