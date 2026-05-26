import {motion} from 'framer-motion'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className='relative bg-indigo-950 border-t border-white'>
        <div className='container mx-auto px-4 py-8'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity:1, y: 0 }}
                className='text-white text-sm'>
                    @{currentYear} senmarutech. All rights reserved.
                </motion.div>
                <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className='text-white text-sm items-center gap-1'>
                    Made by senmarutech
                </motion.div>

                {/* Links */}
                <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className='flex gap-3'>
                    {[
                        {Icon: FaGithub, href: 'https://github.com/senmarutech'},
                        {Icon: FaLinkedin, href: 'https://www.linkedin.com/in/ahmad-nur-rozik-9240a1299/'},
                        {Icon: FaWhatsapp, href: 'https://wa.me/6282225596862'},
                        {Icon: FaInstagram, href: 'https://www.instagram.com/nuroziqahmad03'},
                    ].map(({ Icon, href}, index) => (
                        <motion.a
                        key={index}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -3, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-8 h-8 rounded-full bg-linear-to-r
                        from-blue-500/10 to-cyan-500/10 flex items-center
                        justify-center text-white hover:from-blue-500
                        hover:to-cyan-500 transition-all duration-300'>
                            <Icon size={14}/>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </div>
    </footer>
  )
}

export default Footer