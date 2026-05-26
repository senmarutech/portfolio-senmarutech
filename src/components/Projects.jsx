import { useState } from "react"
import work1 from '../assets/work1.png'
import work2 from '../assets/work2.png'
import work3 from '../assets/work3.png'
import work4 from '../assets/work4.png'
import work5 from '../assets/work5.png'
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import { motion } from 'framer-motion';

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;

    const projects = [
        {id:1, title: "Yasaro Website", category: 'Full Stack',
            img: work1, tech: ['Tailwind CSS', 'Javascript', 'Laravel', 'Figma', 'MySQL'], github: "https://github.com/senmarutech",
            live: "https://yasarofoundation.com"},
        {id:2, title: "LumiSmile Website", category: 'Frontend',
            img: work2, tech: ['Tailwind CSS', 'Javascript', 'Reactjs'], github: "https://github.com/senmarutech/LumiSMile-Website ",
            live: "#"},
        {id:3, title: "LumiThesis Website", category: 'Frontend',
            img: work3, tech: ['Tailwind CSS', 'Javascript', 'Reactjs', 'Framer Motion'], github: "https://github.com/senmarutech/",
            live: "#"},
        {id:4, title: "LumiNails Website", category: 'Frontend',
            img: work4, tech: ['Tailwind CSS', 'Javascript', 'Reactjs', 'Framer Motion'], github: "https://github.com/senmarutech/LumiNails-Website",
            live: "#"},
        {id:5, title: "LumiPets Website", category: 'Frontend',
            img: work5, tech: ['Tailwind CSS', 'Javascript', 'Reactjs'], github: "https://github.com/senmarutech/",
            live: "#"}
    ];

    const nextSlide = () => {
        setCurrentIndex(
            prev => prev + itemsPerPage >= projects.length
            ? 0
            : prev + itemsPerPage);
    };

    const prevSlide = () => {
        setCurrentIndex(prev => prev - itemsPerPage < 0
            ? Math.max(0, projects.length - itemsPerPage)
            : prev - itemsPerPage);
    };
  return (
    <section id="projects" className="relative py-20 bg-blur-sm overflow-hidden">
        <div className="container relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8"
            data-aos="fade-up">
                <h2 className="text-3xl md:text-5xl font-grotesk font-bold text-indigo-950 mb-4">
                    My<span className="text-transparent bg-clip-text bg-linear-to-r
                    from-blue-500 to-cyan-500"> Recent Project</span>
                </h2>
                <p className="text-indigo-950 font-medium text-lg md:text-xl font-grotesk max-w-2xl mx-auto">
                    Developed responsive website with modern interface and optimized performance
                </p>
            </div>
            <div className="flex justify-end gap-4 mb-6">
                <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-white shadow-lg text-indigo-950
                hover:text-blue-600 border border-blue-500/20">
                    <FaChevronLeft size={20}/>
                </button>
                <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-white shadow-lg text-indigo-950
                hover:text-blue-600 border border-blue-500/20">
                    <FaChevronRight size={20}/>
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            gap-8">
                {projects.slice(currentIndex,
                    currentIndex + itemsPerPage).map((project, idx) => (
                        <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="group">
                            <div className="bg-white rounded-2xl
                            overflow-hidden shadow-xl border border-slate-200">
                                <div className="relative overflow-hidden h-56">
                                    <img src={project.img} alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110
                                    transition-transform duration-500"/>
                                    <div className="absolute inset-0 bg-linear-to-r from-blue-500/90
                                    flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100
                                    transition-opacity duration-300">
                                         {/* Github */}
                                        <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white rounded-full text-indigo-950
                                        hover:text-blue-600 transition-colors">
                                            <FaGithub size={24}/>
                                        </a>
                                        {/* Website */}
                                        <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white rounded-full text-indigo-950 hover:text-blue-600 transition-colors">
                                            <FaExternalLinkAlt size={20}/>
                                        </a>
                                    </div>
                                    <span className="absolute top-4 left-4 px-3 py-1 bg-white/50 backdrop-blur-sm
                                    rounded-full text-xs md:text-sm font-semibold text-white">
                                        {project.category}
                                    </span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg md:text-xl font-bold mb-2 text-indigo-950">
                                        {project.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t, i) => (
                                            <span
                                            key={i}
                                            className="px-2 py-1 text-xs md:text-sm rounded-full bg-linear-to-r from-blue-600 to-cyan-600
                                            hover:from-blue-500 hover:to-cyan-500
                                            border border-blue-400/30
                                            text-white">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
            </div>
            <div className="flex justify-center gap-3 mt-10">
                {[0, 1].map((_, index) => (
                    <button
                    key={index}
                    onClick={() => setCurrentIndex(index * itemsPerPage)}
                    className={`h-3 rounded-full transition-all duration-300
                    ${
                        Math.floor(currentIndex / itemsPerPage) === index
                        ? 'w-10 bg-linear-to-r from-blue-500 to-cyan-500'
                        : 'w-3 bg-slate-300'
                    }`}>

                    </button>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Projects