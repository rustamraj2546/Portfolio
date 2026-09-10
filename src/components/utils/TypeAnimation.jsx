import { useTypewriter, Cursor } from 'react-simple-typewriter'

const TypeAnimation = () => {
    const [text] = useTypewriter({
        words: ['Rustam Kumar', 'Software Developer', 'Web Developer'],
        loop: true,
        delaySpeed: 2000,
        typeSpeed: 100,
        deleteSpeed: 80
      })
    
      return (
        <div className='inline'>
          <span className='text-red-600'>{text}</span>
          <Cursor cursorColor='red' />
        </div>
      );
}

export default TypeAnimation;