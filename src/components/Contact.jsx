import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCircle, FaPaperPlane } from 'react-icons/fa';

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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full
                bg-blue-500 backdrop-blur-sm mb-4">
                    <FaCircle className="w-2 h-2 text-white animate-pulse"/>
                    <span className="text-white text-xs md:text-sm font-sf-display font-semibold">
                        Lets Talk.
                    </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-sf-display font-bold text-indigo-950 mb-4">
                    Contact<span className="text-transparent  bg-clip-text bg-linear-to-r
                    from-blue-500 to-cyan-500"> Me</span>
                </h2>
                <p className="text-indigo-950 text-lg font-sf-display font-normal md:text-2xl max-w-2xl mx-auto">
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
                            text-base md:text-lg font-sf-text text-indigo-950 focus:ring-blue-500
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
                            text-base md:text-lg font-sf-text text-indigo-950 focus:ring-blue-500
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
                            text-base md:text-lg font-sf-text text-indigo-950 focus:ring-blue-500
                            focus:outline-none focus:ring-2 focus:border-transparent
                            transition-all'/>
                        </div>
                        {/* Button */}
                        <motion.button
                        type='submit'
                        className='w-full px-6 md:px-8 py-3 md:py-4 bg-linear-to-r
                        from-blue-500 to-cyan-500 text-white rounded-full font-semibold
                        text-base md:text-lg shadow-lg font-sf-display hover:shadow-cyan-600/30 transition-all
                        duration-300 flex items-center justify-center gap-2 group overflow-hidden'>
                        <div className="relative h-6 md:h-7 overflow-hidden flex flex-col justify-center">
                            <div className="transition-transform duration-300 ease-out group-hover:translate-y-full">
                                Send Message
                            </div>
                            <div className="absolute inset-x-0 transition-transform duration-300 ease-out -translate-y-full group-hover:translate-y-0 text-center whitespace-nowrap">
                                Send Message
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <FaPaperPlane className='text-sm md:text-base transition-transform duration-300 group-hover:scale-115'/>
                        </div>
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Contact