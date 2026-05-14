import {
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  CodeBracketSquareIcon,
  CubeIcon,
  PaintBrushIcon,
  SpeakerWaveIcon
} from "@heroicons/react/24/solid";

import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";
import about4 from "../assets/about4.png";

const aboutImage = [
  {
    id: 1,
    src: about1,
    alt: "Sen - Professional Photo",
    gradient: "bg-gradient-to-r from-blue-600 to-cyan-600 border-blue-400/40",
    badge: "Professional",
    badgeColor: "bg-blue-500",
    animation: "fade-right",
    delay: 200
  },
  {
    id: 2,
    src: about2,
    alt: "Sen - Working Environment",
    gradient: "bg-gradient-to-r from-blue-500 to-cyan-500 border-blue-400/40",
    badge: "Creative",
    badgeColor: "bg-cyan-500",
    animation: "fade-left",
    delay: 300
  },
  {
    id: 3,
    src: about3,
    alt: "Sen - Professional Photo",
    gradient: "bg-gradient-to-r from-blue-500 to-cyan-500 border-blue-400/40",
    badge: "Developer",
    badgeColor: "bg-blue-600",
    animation: "fade-right",
    delay: 400
  },
  {
    id: 4,
    src: about4,
    alt: "Sen - Design Work",
    gradient: "bg-gradient-to-r from-blue-600 to-cyan-600 border-blue-400/40",
    badge: "Designer",
    badgeColor: "bg-cyan-600",
    animation: "fade-left",
    delay: 500
  }
];

const skills = [
  {
    id: 1,
    icon: CodeBracketSquareIcon,
    iconColor: "text-blue-400",
    title: "Frontend",
    desc: "Tailwind CSS, Javascript, React js, Vue js"
  },
  {
    id: 2,
    icon: SpeakerWaveIcon,
    iconColor: "text-blue-400",
    title: "Languages",
    desc: "Bahasa, English"
  },
  {
    id: 3,
    icon: PaintBrushIcon,
    iconColor: "text-blue-400",
    title: "Design",
    desc: "UI/UX Design, Prototyping, Graphic Design"
  },
  {
    id: 4,
    icon: CubeIcon,
    iconColor: "text-blue-400",
    title: "Tools",
    desc: "VSCode, Figma, Photoshop, Canva"
  }
];

export default function About() {
  return (
    <section className="relative py-20 min-h-screen bg-indigo-950 flex items-center overflow-hidden" id="about">
        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-5xl lg:max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 items-center">
                <div className="lg:h-full flex justify-center lg:justify-start order-2 lg:order-1">
                    <div className="relative w-full max-w-md">
                        <div
                        data-aos="zoom-in"
                        className="relative bg-linear-to-br from-gray-800/60 to-blue-900/40 rounded-3xl 
                        backdrop-blur-sm p-6 border border-blue-500/30 shadow-2xl">
                            <div className="grid grid-cols-2 gap-4">
                                {aboutImage.map((image) => (
                                <div
                                key={image.id}
                                className="relative group"
                                data-aos={image.animation}
                                data-aos-delay={image.delay}>
                                    <div className={`rounded-2xl p-2 border shadow-lg ${image.gradient}`}>
                                        <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-48 object-cover rounded-xl group-hover:scale-105
                                        transition-transform duration-300"/>
                                    </div>
                                    <div className={`absolute -top-2 -right-2 text-white text-xs px-2 py-1
                                    rounded-full font-semibold ${image.badgeColor}`}>
                                        {image.badge}
                                    </div>
                                </div>
                            ))}
                            </div>
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-20
                            bg-linear-to-r from-blue-500 to-cyan-500 rounded-2xl px-6 py-3 border border-blue-400/40
                            shadow-xl"
                            data-aos="fade-up"
                            data-aos-delay="600">
                                <div className="text-center text-white text-base md:text-xl font-bold">
                                    1+ Years Experience
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* CONTENT SECTION */}
                <div className="flex flex-col justify-center order-1 lg:order-2">
                    <div className="text-center lg:text-left"
                    data-aos="fade-left">
                        <h2 className="text-white font-bold text-2xl md:text-4xl leading-tight">
                            About <span className="text-transparent bg-clip-text
                            bg-linear-to-r from-blue-500 to-cyan-500">Me</span>
                        </h2>
                        <p className="text-white font-medium text-base md:text-lg max-w-2xl mx-auto">
                          Frontend Developer & UI/UX Designer Enthusiast
                        </p>
                    </div>
                    <p className="text-blue-100 pt-6 text-center lg:text-left text-sm md:text-base leading-relaxed"
                    data-aos="fade-left"
                    data-aos-delay="200">
                    Heyooo, My name is Ahmad Nur Rozik. I am graduate of Informatics in Nahdlatul Ulama Al Ghazali University, Cilacap. I am a Frontend Developer and UI/UX Designer Enthusiast
                    who loves building modern, responsive, and user-friendly web 
                    applications. I have experience in UI/UX design into functional web applications using modern
                    technologies, ensuring optimal performance across devices and browsers. I am also familiar with managing
                    code efficiently, collaborating with teams, and continuously improving user experience through clean and
                    maintainable code.

                    </p>
                    {/* SKILLS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8"
                    data-aos="fade-up"
                    data-aos-delay="300">
                        {skills.map((skill) => {
                            const Icon = skill.icon;
                            return (
                        <div key={skill.id} className="flex flex-col">
                            <div className="flex items-center gap-3 mb-3">
                                <Icon className={`w-5 h-5 md:w-6 md:h-6 ${skill.iconColor}`}/>
                                <h3 className="text-sm md:text-base font-bold text-white">
                                    {skill.title}
                                </h3>
                            </div>
                            <p className="text-blue-100 text-xs md:text-sm">
                                {skill.desc}
                            </p>
                        </div>
                        );
                    })}
                    </div>
                    {/* BUTTONS */}
                    <div className="flex gap-4 pt-8 flex-col sm:flex-row"
                    data-aos="fade-up"
                    data-aos-delay="400">
                      <a href="#projects" className="px-8 md:px-10 py-4 rounded-xl font-semibold
                      transition-all duration-300 flex items-center text-sm md:text-base justify-center
                      bg-linear-to-r from-blue-600 to-cyan-600 text-white
                      hover:from-blue-500 hover:to-cyan-500 group cursor-pointer">
                        View Project
                        <ArrowRightIcon className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform"/>
                      </a>
                      <a href="#contact" className="px-8 md:px-10 py-4 rounded-xl font-semibold
                      transition-all duration-300 flex items-center text-sm md:text-base justify-center
                      border border-blue-400 text-blue-400
                      hover:bg-blue-400/10 cursor-pointer">
                        <ChatBubbleLeftRightIcon className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                        Contact Me
                      </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}