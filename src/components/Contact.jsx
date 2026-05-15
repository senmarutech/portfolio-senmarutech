import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

  return (
    <section id='contact' className='relative min-h-screen flex items-center py-20 overflow-hidden'>
        <div className='relative z-10 container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className="text-center mb-16"
            data-aos="fade-up">
                <h2 className="text-3xl md:text-4xl font-bold text-indigo-950 mb-4">
                    Contact<span className="text-transparent bg-clip-text bg-linear-to-r
                    from-blue-500 to-cyan-500"> Me</span>
                </h2>
                <p className="text-indigo-950 text-base md:text-lg max-w-2xl mx-auto">
                    Have a question or want to work together? Send me a message!
                </p>
                {/* Form */}
                <motion.div
                initial = {{ opacity:0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once:true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className='w-full max-w-xl mx-auto mt-6'>
                    <form className='space-y-4 md:space-y-6'
                    action="https://api.web3forms.com/submit" 
                    method="POST">
                        <input
                        type="hidden"
                        name="access_key"
                        value="4dd580d1-8488-4665-b743-2dca8ab69bcc"/>
                        {/* Name */}
                        <div>
                            <input type="text" name='name'
                            value={formData.name} 
                            onChange={handleChange}
                            required 
                            placeholder='Your Name'
                            className='w-full px-4 py-2.5 bg-white/50
                            backdrop-blur-sm border border-slate-300 rounded-full
                            text-sm text-indigo-950 focus:ring-blue-500
                            focus:outline-none focus:ring-2 focus:border-transparent
                            transition-all'/>
                        </div>
                        {/* Email */}
                        <div>
                            <input type="email" name='email'
                            value={formData.email} 
                            onChange={handleChange}
                            required 
                            placeholder='Email Address'
                            className='w-full px-4 py-2.5 bg-white/50
                            backdrop-blur-sm border border-slate-300 rounded-full
                            text-sm text-indigo-950 focus:ring-blue-500
                            focus:outline-none focus:ring-2 focus:border-transparent
                            transition-all'/>
                        </div>
                        {/* Message */}
                        <div>
                            <textarea name='message'
                            value={formData.message} 
                            onChange={handleChange}
                            required 
                            rows={window.innerWidth < 768 ? 4 : 5}
                            placeholder='Your Message'
                            className='w-full px-4 py-2.5 bg-white/50
                            backdrop-blur-sm border border-slate-300 rounded-2xl
                            text-sm text-indigo-950 focus:ring-blue-500
                            focus:outline-none focus:ring-2 focus:border-transparent
                            transition-all'/>
                        </div>
                        {/* Button */}
                        <motion.button
                        type='submit'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='w-full px-6 md:px-8 py-3 md:py-4 bg-linear-to-r
                        from-blue-500 to-cyan-500 text-white rounded-full font-semibold
                        text-sm md:text-base shadow-lg hover:shadow-cyan-600/30 transition-all
                        duration-300 flex items-center justify-center gap-2 group'>
                            <span> Send Message </span>
                            <FaPaperPlane className='text-sm md:text-base group-hover:translate-x-1 transition-transform
                            group-hover:-translate-y-1'/>
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Contact