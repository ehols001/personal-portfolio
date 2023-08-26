import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from "../hoc";
import { certificate } from '../assets';

const ServiceCard = ({ index, title, icon, link }) => {
    return (
        <Tilt className='xs:w-[250px] md:mx-0 mx-auto'>
            <motion.div
                variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
                className='w-full green-cyan-gradient p-[1px] rounded-[20px] shadow-card'
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450
                    }}
                    className='bg-tertiary rounded-[20px] py-5 px-5 flex justify-evenly items-center flex-col'
                >
                    <img src={icon} alt={title} className='w-48 h-48 object-contain' />
                    {/* <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3> */}
                </div>

                <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                    <div
                        onClick={() => window.open(link, '_blank')}
                        className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                    >
                        <img
                            src={certificate}
                            alt='certificate'
                            className='w-1/2 h-1/2 object-contain filter-white'
                        />
                    </div>
                </div>
            </motion.div>
        </Tilt>
    )
}

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn('', '', 0.1, 1)}
                className='mt-4 text-white text-[17px] max-w-3xl leading-[30px]'
            >
                I'm a software engineer early in my career with a primary interest in backend development. I'm experienced in object-oriented programming languages such as Java and C++ as well as frameworks such as React and Node.js. I'm a quick learner and a team player with prior experience working in a collaborative, agile environment.
            </motion.p>

            <div className='mt-12 flex flex-wrap gap-10'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} link={service.link} {...service} />
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(About, 'about');