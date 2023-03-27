'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, planetVariants, staggerContainer } from '../utils/motion';
import { NewFeatures, TypingText, TitleText } from '../components';
import { newFeatures } from '../constants';
const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10 `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('left', 'tween', 0.5, 1.8)}
        className="flex-[0.75] flex flex-col justify-center "
      >
        <TypingText title="| Whats New?" />
        <TitleText title={<>Whats new with MetaVersus!</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature,index) => (
            <NewFeatures key={feature.title} {...feature} index={index}/>
          ))}
        </div>
      </motion.div>
      <motion.div variants={planetVariants('right')} className={`${styles.flexCenter} flex-1 `}>
        <img src="./whats-new.png" alt="getStarted" className="w-[90%] h-[90%] object-contain" />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
