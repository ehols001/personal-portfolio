import { CoinCanvas } from './canvas';
import { SectionWrapper } from "../hoc";
import { skills } from '../constants';
import { motion } from 'framer-motion';
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Skills = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>What I know so far</p>
                <h2 className={styles.sectionHeadText}>Technologies.</h2>
            </motion.div>

            <div className="mt-14 flex flex-row flex-wrap justify-center gap-10">
                {skills.map((skill) => (
                    <div className="w-28 h-28" key={skill.name}>
                        <CoinCanvas icon={skill.icon} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(Skills, '');