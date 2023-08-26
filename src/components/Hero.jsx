import { styles } from '../styles';

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div className={`${styles.paddingX} absolute inset-0 xl:ml-16 xl:top-[480px] top-2/3 max-w-4xl mx-auto overflow-hidden`}>
                <div className='flex flex-col justify-center items-center absolute sm:mt-7 sm:ml-7 mt-5 ml-5'>
                    <div className='sm:w-6 sm:h-6 w-4 h-4 rounded-full bg-[#3ecfe2]' />
                    <div className='w-1 sm:h-72 h-40 cyan-gradient' />
                </div>
                <div className="bg-primary/[0.95] text-center sm:py-8 py-4 z-3">
                    <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-secondary'>Evan</span></h1>
                </div>
                <div className="bg-white float-left sm:ml-10 ml-7 sm:px-14 px-10 sm:py-4 py-2 z-4 white-gradient">
                    <p className={`${styles.headSubText}`}>Software Engineer</p>
                </div>
            </div>

            <div className="absolute sm:bottom-10 bottom-20 w-full flex justify-center items-center text-secondary">
                <a href='#about'>
                    <i className="fa-solid fa-angles-down fa-bounce fa-2xl" />
                </a>
            </div>
        </section>
    )
}

export default Hero;