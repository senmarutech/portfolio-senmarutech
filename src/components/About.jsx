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
import { FaCircle } from "react-icons/fa";

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
    desc: "HTML, CSS, Tailwind CSS, Javascript, React js, Vite, Git"
  },
  {
    id: 2,
    icon: SpeakerWaveIcon,
    iconColor: "text-blue-400",
    title: "Languages",
    desc: "Bahasa Indonesia, English"
  },
  {
    id: 3,
    icon: PaintBrushIcon,
    iconColor: "text-blue-400",
    title: "Design",
    desc: "UI Design, Wireframe, UX Research, Prototyping, Graphic Design"
  },
  {
    id: 4,
    icon: CubeIcon,
    iconColor: "text-blue-400",
    title: "Tools",
    desc: "VS Code, Figma, Photoshop, Canva, Plerdy, Miro"
  }
];

export default function About() {
  return (
    <section className="relative py-20 min-h-screen flex items-center overflow-hidden" id="about">
      <div className="bg-indigo-950 pr-2 pl-2 pt-8 pb-8 m-4 md:m-8 rounded-3xl md:rounded-4xl">
        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-5xl lg:max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="lg:h-full flex justify-center order-2 items-center lg:order-1">
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
                                    <div className={`rounded-2xl p-1 md:p-2 shadow-lg ${image.gradient}`}>
                                        <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover rounded-xl group-hover:scale-105
                                        transition-transform duration-300"/>
                                    </div>
                                    <div className={`absolute -top-2 -right-2 text-white text-xs md:text-sm px-4 py-1
                                    rounded-full font-sf-text font-semibold ${image.badgeColor}`}>
                                        {image.badge}
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* CONTENT SECTION */}
                <div className="flex flex-col justify-center order-1 lg:order-2">
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full
                        bg-blue-500 backdrop-blur-sm mb-4"
                        data-aos="fade-left"
                        data-aos-delay="50">
                          <FaCircle className="w-2 h-2 text-white animate-pulse"/>
                          <span className="text-white font-sf-display text-xs md:text-sm font-semibold">
                            Yoo! That's me.
                          </span>
                        </div>
                        <h2 className="text-white font-sf-display font-bold text-3xl md:text-5xl leading-tight"
                        data-aos="fade-left"
                        data-aos-delay="100">
                            About <span className="text-transparent bg-clip-text
                            bg-linear-to-r from-blue-500 to-cyan-500">Me</span>
                        </h2>
                        <p className="text-white font-sf-display font-medium text-lg md:text-2xl max-w-2xl mx-auto"
                        data-aos="fade-left"
                        data-aos-delay="200">
                          Frontend Developer & UI/UX Designer
                        </p>
                    </div>
                    <div className="space-y-2 pt-6 pb-6">
                      <p className="text-white  font-sf-text text-justify text-base md:text-lg leading-relaxed"
                      data-aos="fade-left"
                      data-aos-delay="300">
                        I am passionate about building responsive, user-friendly, and visually appealing web applications. 
                        With a strong foundation in UI/UX principles and modern frontend technologies, i enjoy transforming 
                        designs into functional and engaging digital experiences.
                      </p>
                      <p className="text-white  font-sf-text text-justify text-base md:text-lg leading-relaxed"
                      data-aos="fade-left"
                      data-aos-delay="400">
                        I love every part of the journey, learning new things and gaining experiences that continuously 
                        shape me into a better developer. Correct every mistake, then improve it to make it better day by day.
                      </p>
                    </div>
                    {/* SKILLS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    data-aos="fade-up"
                    data-aos-delay="400">
                        {skills.map((skill) => {
                            const Icon = skill.icon;
                            return (
                        <div key={skill.id} className="flex flex-col">
                            <div className="flex items-center gap-2 mb-3">
                                <Icon className={`w-5 h-5 md:w-6 md:h-6 ${skill.iconColor}`}/>
                                <h3 className="text-lg md:text-xl font-sf-display font-medium text-white">
                                    {skill.title}
                                </h3>
                            </div>
                            <p className="text-white font-sf-text text-sm md:text-base">
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
                      <a href="#projects" className="px-8 md:px-10 py-4 rounded-full font-semibold
                      transition-all duration-300 flex items-center text-base md:text-lg justify-center
                      bg-linear-to-r from-blue-600 to-cyan-600 text-white
                      hover:from-blue-500 hover:to-cyan-500 group font-sf-display cursor-pointer">
                        View Project
                        <ArrowRightIcon className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform"/>
                      </a>
                      <a href="#contact" className="px-8 md:px-10 py-4 font-sf-display rounded-full font-semibold
                      transition-all duration-300 flex items-center text-sm md:text-base justify-center
                      border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 cursor-pointer">
                        <ChatBubbleLeftRightIcon className="w-4 h-4 md:w-5 md:h-5 mr-2 text-blue-400" />
                        Contact Me
                      </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}