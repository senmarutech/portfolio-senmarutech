import { FaCss3Alt, FaHtml5, FaReact, FaVuejs } from "react-icons/fa"
import { SiGit, SiTailwindcss } from "react-icons/si"
import { motion } from 'framer-motion';

const SkillsHero = () => {
    const skillsHero = [
        { name: 'Reactjs', Icon: FaReact, color: "#61DAFB"},
        { name: 'HTML', Icon: FaHtml5, color: "#E34F26"},
        { name: 'CSS', Icon: FaCss3Alt, color: "#1572B6"},
        { name: 'Tailwind CSS V4', Icon: SiTailwindcss, color: "#06B6D4"},
        { name: 'Git', Icon: SiGit, color: "#F1502F"},
        { name: 'Vuejs', Icon: FaVuejs, color: "#4FC08D"},
    ];

    const duplicatedSkills = [...skillsHero, ...skillsHero, ...skillsHero];
  return (
    <section className="py-4 relative -m-14">
        <div className="container mx-auto px-8">
            <div className="relative overflow-hidden py-3 group scale-105 mask-[linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
                <motion.div
                className="flex gap-4 items-center"
                animate={{ 
                    x: [0, -2880],
                 }}
                 transition={{ 
                    x: {
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: 35,
                        ease: 'linear',
                    },
                  }}>
                    {duplicatedSkills.map((skill, index) => {
                        const Icon = skill.Icon;
                        return (
                            <motion.div
                            key={`skill-${skill.name}-${index}`}
                            className="flex items-center gap-2 w-42 md:w-52 px-3 py-2 md:px-4 md:py-3 shrink-0 justify-center
                            rounded-full bg-white/50 backdrop-blur-sm shadow-xl"
                            whileHover={{ 
                                scale: 1.1,
                                y: -2,
                                transition: {duration: 0.2}
                             }}
                             style={{ 
                                borderColor: `${skill.color}40`,
                                boxShadow: `0 2px 8px ${skill.color}20`
                              }}>
                                <div style={{ color: skill.color }}>
                                    <Icon className="text-xl md:text-4xl"/>
                                </div>
                                <span
                                className="text-sm md:text-lg font-medium md:font-bold text-indigo-950
                                font-sf-display whitespace-nowrap">
                                    {skill.name}
                                </span>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default SkillsHero