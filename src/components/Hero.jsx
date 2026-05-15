import { ArrowRightIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import hero from '../assets/hero1.png'
import { motion } from 'framer-motion';
import { FaReact, FaJsSquare, FaVuejs, FaHtml5, FaCss3Alt} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const Hero = () => {
   const icons = [
    {Icon: FaReact, color: "#61DAFB", delay: 0, size: 60},
    {Icon: FaCss3Alt, color: "#1572B6", delay: 1, size: 60},
    {Icon: FaJsSquare, color: "#F7DF1E", delay: 2, size: 60},
    {Icon: FaHtml5, color: "#E34F26", delay: 3, size: 60},
    {Icon: SiTailwindcss, color: "#06B6D4", delay: 4, size: 60},
    {Icon: FaVuejs, color: "#4FC08D", delay: 5, size: 60}
  ];

  const getPosition = (index, total) => {
    const radius = 220;
    const angle = (index / total) * 2 * Math.PI;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return {x, y};
  };
  return (
    <section className="relative w-full min-h-screen bg-blur-sm
    flex items-center" id="home"> 
    <div className="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-5xl
    lg:max-w-7xl mx-auto relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 flex flex-col lg:flex-row items-center
        gap-10 lg:gap-20">
            <div className="flex flex-col md:mt-0 mt-20 justify-center">
                <div className="text-white lg:text-left">
                    <h1 className="text-indigo-950 font-bold text-center md:text-left text-2xl md:text-4xl leading-tight"
                    data-aos="fade-right"
                    data-aos-delay="100"> 
                        Yaps, <span className="text-transparent bg-clip-text
                        bg-linear-to-r from-blue-500 to-cyan-500">I'm senmarutech</span>👍
                    </h1>
                    <p className="text-indigo-950 font-medium text-center md:text-left text-base md:text-xl mt-4"
                    data-aos="fade-right"
                    data-aos-delay="200">
                        Frontend Developer & <br />UI/UX Designer Enthusiast
                    </p>
                </div>
                <p className="text-indigo-950 pt-6 text-center lg:text-left
                mx-auto max-w-xl text-sm md:text-base leading-relaxed"
                data-aos="fade-right"
                data-aos-delay="200">
                   I am a frontend developer who enjoys building clean and responsive websites. 
                   I focus on creating simple and user friendly interfaces that work well across different devices. 
                   I am always learning and improving my skills to deliver better results.
                </p>
                <div className="flex items-center gap-4 pt-8 flex-col sm:flex-row
                sm:w-max sm:mx-auto lg:mx-0"
                data-aos="fade-up"
                data-aos-delay="300">
                <a 
                href='https://wa.me/6282225596862' 
                target='_blank' 
                rel="noopener noreferrer" 
                className="px-8 md:px-10 py-4 rounded-xl relative group
                w-full sm:w-max flex justify-center overflow-hidden
                bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all
                duration-300">
                    <span className="relative flex items-center justify-center text-white
                    font-semibold text-sm md:text-base">
                        Contact Me
                    <ArrowRightIcon className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1
                    transition-transform"/>
                    </span>
                </a>
                <a 
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-400 px-8 md:px-10 py-4
                rounded-xl relative group w-full sm:w-max flex justify-center
                hover:bg-blue-400/10 transition-all duration-300 download-loader">
                <div className="flex items-center justify-center relative">
                    <ArrowDownTrayIcon
                    className="mr-2 w-4 h-4 md:w-5 md:h-5 text-blue-400 group-hover:translate-y-1
                    transition-transform"/>
                    <span className="text-blue-400 font-semibold text-sm md:text-base">
                        Download CV
                    </span>
                </div>
                </a>
                </div>
            </div>
            {/* Image */}
            <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut'}}
            className='flex-1 relative flex items-center justify-center'>
                <div className='relative md:w-137.5 md:h-137.5 h-80 w-80 flex items-center
                justify-center'>
                    <motion.div
                    className='md:w-80 md:h-80 w-70 h-70 rounded-full
                    overflow-hidden border-4 border-white shadow-2xl z-10'
                    whileHover={{ scale: 1.05}}
                    transition={{ type: 'spring', stiffness: 300, damping:20}}>
                        <img src={hero} alt="Hero Image" />
                    </motion.div>
                    <motion.div
                    className='absolute rounded-full border-4 border-cyan-500
                    md:w-84 md:h-84 w-75 h-75'
                    style={{ boxShadow: '0 0 20px rgb(34 211 238)' }}
                    transition={{ duration: 3, repeat: Infinity }}/>
                    {icons.map(({ Icon, color, delay, size}, index) => {
                        const {x,y} = getPosition(index, icons.length);
                        return (
                            <motion.div
                            key={index}
                            className='absolute hidden md:block -translate-x-1/2 -translate-y-1/2'
                            style={{ 
                                left: '50%',
                                top: '50%',
                             }}
                             initial={{ x: 0, y:0, scale: 0 }}
                             animate={{ 
                                x: x,
                                y: y,
                                scale: 1
                              }}
                              transition={{ 
                                type: 'spring',
                                stiffness: 150,
                                damping: 20,
                                delay: delay * 0.1,
                                duration: 1.5
                               }}
                               whileHover={{ 
                                scale: 1.4,
                                transition: {duration: 0.2}
                                }}>
                                    <div
                                    className='relative group filter-[drop-shadow(0_0_2px_rgb(34_211_238))]'>
                                        <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ 
                                            duration: 15,
                                            repeat: Infinity,
                                            ease: 'linear'
                                         }}
                                         style={{ color: color }}>
                                            <Icon size={size}/>
                                        </motion.div>
                                    </div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    </div>
    </section>
  );
};

export default Hero