import { useEffect, useState } from "react"
import { AnimatePresence, motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaStar, FaUserCircle } from "react-icons/fa";

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [autoplay, setAutoplay] = useState(true);

    const testimonials = [
        {id: 1, name: 'Dr. M. Khanif, M.Pd.B.I', role: 'CEO of Yasaro Foundation', rating: 4,
            content: 'Working together on this website development was an excellent experience. The resulting design looks modern, professional, and responsive across multiple devices. The work was carried out with clear communication, timely delivery, and attention to detail based on the clients needs. I greatly appreciate the quality of their work and dedication. Highly recommended for professional web development projects.'
        },
        {id: 2, name: 'Nawalia Nur Fitriyah', role: 'Tutor of ESA Course', rating: 5,
            content: 'The website design is clean, modern, responsive, and informative, reflecting professionalism. Good Pisan!'
        },
        {id: 3, name: 'Aldika Gagah Prasetya', role: 'Tutor of ESA Course', rating: 4,
            content: 'The visual changes are really noticeable. It is now cleaner, has a clear focus, and navigation is easier. It does not tire your eyes.'
        },
        {id: 4, name: 'Robit Totussangadah', role: 'Tutor of ESA Course', rating: 4,
            content: 'On the whole, yasaro website provides a clear and effective way of presenting information.'
        }
    ];

    useEffect(() => {
        let interval;
        if (autoplay) interval = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex, autoplay, testimonials.length]);

    const variants = {
        enter: (direction) => ({ x: direction > 0 ? 300 : -300, opacity: 0}),
        center: { x:0, opacity:1, transition: {duration: 0.5}},
        exit: (direction) => ({ x: direction < 0 ? 300 : -300, opacity: 0, transition: { duration: 0.5}
        })
    };
  return (
    <section id="testimonials" className="py-20 overflow-hidden">
        <div className="bg-indigo-950 pr-2 pl-2 pt-8 pb-8 m-4 md:m-8 rounded-3xl md:rounded-4xl">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16"
                data-aos="fade-up">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        What<span className="text-transparent bg-clip-text bg-linear-to-r
                        from-blue-500 to-cyan-500"> Clients Say ?</span>
                    </h2>
                    <p className="text-white font-medium text-lg md:text-2xl max-w-2xl mx-auto">
                        Clients appreciate clean design and excellent performance.
                    </p>
                </div>
                <div className="relative max-w-4xl mx-auto">
                    <div className="relative h-100 md:h-87.5 flex items-center
                    justify-center mb-20 mt-20">
                        <AnimatePresence
                        initial={false}
                        custom={direction} mode="wait">
                            <motion.div
                            key={currentIndex} 
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="absolute w-full">
                                <div className="bg-white rounded-2xl md:rounded-4xl shadow-2xl p-8 md:p-10
                                border border-slate-200">
                                    <FaQuoteLeft className="text-blue-500 mb-6"/>
                                    <p className="text-base md:text-xl text-indigo-950 mb-4
                                    leading-relaxed">
                                        {testimonials[currentIndex].content}
                                    </p>
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <FaStar key={i} className="text-yellow-400 text-lg md:text-2xl"/>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 md:w-14 md:h-14 rounded-full bg-linear-to-r
                                        from-blue-500 to-cyan-500 flex items-center justify-center">
                                            <FaUserCircle className="text-white text-xl md:text-4xl"/>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-sm md:text-2xl text-indigo-950">
                                                {testimonials[currentIndex].name}
                                            </h4>
                                            <p className="text-blue-500 text-sm md:text-lg">
                                                {testimonials[currentIndex].role}
                                            </p>
                                        </div>
                                    </div>
                                    <motion.div className="absolute inset-0 rounded-2xl pointer-events-none"
                                    animate={{ 
                                        boxShadow: [
                                            "0 0 20px rgba(6, 182, 212, 0.1)",
                                            "0 0 40px rgba(6, 182, 212, 0.2)",
                                            "0 0 20px rgba(6, 182, 212, 0.1)",
                                        ]}}
                                        transition={{ duration: 3, repeat: Infinity }}>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Icon Left */}
                    <motion.button
                    onClick={() => {setDirection(-1); setCurrentIndex((prev) => (
                        prev - 1 + testimonials.length
                    ) % testimonials.length); setAutoplay(false);
                    setTimeout(() => setAutoplay(true), 5000)
                    }}
                    className="absolute left-0 md:-left-2 top-1/2 -translate-y-1/2 -translate-x-4
                    md:-translate-x-12 w-8 md:w-12 h-8 md:h-12 rounded-full bg-white shadow-lg flex items-center
                    justify-center text-blue-500 border border-slate-200 hover:scale-110 transition-all
                    duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}>
                        <FaChevronLeft size={20}/>
                    </motion.button>

                    {/* Icon Right */}
                    <motion.button
                    onClick={() => {setDirection(1); setCurrentIndex((prev) => (
                        prev + 1 ) % testimonials.length); setAutoplay(false);
                    setTimeout(() => setAutoplay(true), 5000)
                    }}
                    className="absolute right-0 md:-right-2 top-1/2 -translate-y-1/2 translate-x-4
                    md:translate-x-12 w-8 md:w-12 h-8 md:h-12 rounded-full bg-white shadow-lg flex items-center
                    justify-center text-blue-500 border border-slate-200 hover:scale-110 transition-all
                    duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}>
                        <FaChevronRight size={20}/>
                    </motion.button>
                    <div className="flex justify-center gap-3">
                        {testimonials.map((_, index) => (
                            <motion.div
                            key={index}
                            onClick={() => { setDirection(index > currentIndex
                                ? 1
                                : -1); setCurrentIndex(index); setAutoplay(false);
                                setTimeout(() => setAutoplay(true), 5000);}}
                                className={`h-3 rounded-full transition-all duration-300
                                ${index === currentIndex
                                    ? 'w-10 bg-linear-to-r from-blue-500 to-cyan-500'
                                    : 'w-3 bg-slate-300'
                                }`}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                animate={index === currentIndex ? {
                                    boxShadow: [
                                        "0 0 5px rgba(6, 182, 212, 0.3)",
                                        "0 0 15px rgba(6, 182, 212, 0.6)",
                                        "0 0 5px rgba(6, 182, 212, 0.3)",
                                    ]} : {}}
                                    transition={{ duration: 2, repeat: index === currentIndex ? Infinity : 0 }}>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials