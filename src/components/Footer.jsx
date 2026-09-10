import Devicon from './utils/Devicon';

const Footer = () => {
    return (
        <footer className="w-[70%] m-auto mt-8 py-2 px-4 flex flex-col justify-center items-center space-x-4">
            <p>Designed and Developed with ❤️ by <span className="text-red-500">Rustam Kumar</span></p>
            <p className='m-3'>Copyright &#169; 2024</p>
            <div className='m-8'>
                <ul className='flex space-x-8 items-center'>
                    <li><a href="https://github.com/rustamraj2546" target='_blank'><img className='h-6' src={Devicon.logoGithub.logoGithub} alt="logoGithub" /></a></li>
                    <li><a href="https://www.linkedin.com/in/rustam-48bbb3215/" target='_blank'> <img className='h-6' src={Devicon.logoLinkedin.logoLinkedin} alt="logoLinkedin" /> </a></li>
                    <li><a href="https://www.instagram.com/rajrustam7050/profilecard/?igsh=aTNoMm84eTk1cG1z" target='_blank'> <img className='h-6' src={Devicon.logoInstagram.logoInstagram} alt="logoInstagram" /> </a></li>
                    <li><a href="https://discord.gg/9Tb6JdC5" target='_blank'> <img className='h-6' src={Devicon.logoDiscord.logoDiscord} alt="logoDiscord" /> </a></li>

                </ul>

            </div>
        </footer>
    )
}

export default Footer;