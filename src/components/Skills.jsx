import {
  BriefcaseIcon,
  CodeBracketIcon,
  ComputerDesktopIcon,
  PaintBrushIcon,
  SpeakerWaveIcon,
  Squares2X2Icon,
  WrenchScrewdriverIcon
} from "@heroicons/react/24/solid";
import { FaCircle } from "react-icons/fa";

const skills = [
  {
    id: 1,
    title: "Frontend",
    icon: CodeBracketIcon,
    iconColor: "text-blue-400",
    percentage: 90,
    percentageColor: "text-cyan-500 text-xs md:text-sm",
    gradient: "bg-gradient-to-r from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "English",
    icon: SpeakerWaveIcon,
    iconColor: "text-blue-400",
    percentage: 80,
    percentageColor: "text-cyan-500 text-xs md:text-sm",
    gradient: "bg-gradient-to-r from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    icon: PaintBrushIcon,
    iconColor: "text-blue-400",
    percentage: 80,
    percentageColor: "text-cyan-500 text-xs md:text-sm",
    gradient: "bg-gradient-to-r from-blue-500 to-cyan-500",
  },
  {
    id: 4,
    title: "Web Development",
    icon: ComputerDesktopIcon,
    iconColor: "text-blue-400",
    percentage: 80,
    percentageColor: "text-cyan-500 text-xs md:text-sm",
    gradient: "bg-gradient-to-r from-blue-500 to-cyan-500"
  },
];

const experiences = [
  {
    id: 1,
    position: "Internship UI/UX Designer",
    company: "PT. Impactbyte Teknologi Edukasi Jakarta (skilvul)",
    period: "2023 - 2024",
    desc: "Focused on creating modern and user-friendly interface designs, wireframing, prototyping, and improving user experience for mobile applications.",
    borderColor: "border-blue-500/30",
    dotColor: "bg-blue-500",
    borderClass: "border-blue-500/20",
    dateColor: "text-indigo-950 text-xs md:text-sm font-semibold"
  },
  {
    id: 2,
    position: "Work Administrative Staff",
    company: "Yasaro Foundation Cilacap",
    period: "2024 - Present",
    desc: "Managed and input exam questions into the CBT system and ensured the smooth execution of TOEFL examinations. Assisted participants with technical or procedural issues during the exam while providing excellent customer service to maintain an organized testing experience.",
    borderColor: "border-blue-500/30",
    dotColor: "bg-blue-500",
    borderClass: "border-blue-500/20",
    dateColor: "text-indigo-950 text-xs md:text-sm font-semibold"
  },
  {
    id: 3,
    position: "Internship English Tutor",
    company: "English Stars Academy Cilacap",
    period: "2024 - 2026",
    desc: "Explaining grammar, vocabulary, speaking, and listening materials in a communicative and easy to understand manner.",
    borderColor: "border-blue-500/30",
    dotColor: "bg-blue-500",
    borderClass: "border-blue-500/20",
    dateColor: "text-indigo-950 text-xs md:text-sm font-semibold"
  },
];

const techStack = [
  "HTML",
  "CSS",
  "Tailwind CSS V4",
  "Javascript",
  "Vuejs",
  "Reactjs",
  "Vite",
  "SQL",
  "Figma",
  "Photoshop",
  "Canva",
  "Figjam",
  "Git",
  "CodeIgniter",
];

export default function Skills() {
  return (
    <section className="relative py-20 bg-blur-sm overflow-hidden" id="skills">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16"
            data-aos="fade-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full
                bg-blue-500 backdrop-blur-sm mb-4">
                    <FaCircle className="w-2 h-2 text-white animate-pulse"/>
                    <span className="text-white text-xs md:text-sm font-sf-display font-semibold">
                        Experienced.
                    </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-sf-display font-bold text-indigo-950 mb-4">
                    Skills<span className="text-transparent bg-clip-text bg-linear-to-r
                    from-blue-500 to-cyan-500"> & Experience</span>
                </h2>
                <p className="text-indigo-950 font-sf-display font-normal text-lg md:text-2xl max-w-2xl mx-auto">
                    My technical expertise and professional journey
                </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                <div className="space-y-12">
                    {/* Percentase skills */}
                    <div className="bg-white/50 rounded-2xl p-6 backdrop-blur-sm shadow-xl"
                    data-aos="fade-right"
                    data-aos-delay="100">
                        <div className="p-2">
                            <h3 className="text-xl md:text-2xl font-sf-display font-bold mb-4 text-indigo-950 flex
                            items-center gap-3">
                                <WrenchScrewdriverIcon className="h-5 w-5 md:w-6 md:h-6 text-blue-400" />
                                Technical Skills
                        </h3>
                        </div>
                        <div className="space-y-6 p-2">
                        {skills.map((skill) => {
                            const Icon = skill.icon;
                            return (
                        <div
                        key={skill.id}
                        className="group">
                            <div className="flex items-center justify-between mb-3 ">
                                <span className="text-indigo-950 font-sf-text font-normal
                                flex items-center text-base md:text-lg gap-2">
                                    <Icon className={`w-4 h-4 md:w-5 md:h-5 ${skill.iconColor}`}/>
                                    {skill.title}
                                </span>
                                <span className={skill.percentageColor}>
                                    {skill.percentage}%
                                </span>
                            </div>
                            <div className="h-2 bg-gray-700 rounded-full
                            overflow-hidden">
                                <div className={`h-full rounded-full transition-all
                                duration-1000 group-hover:scale-105
                                    ${skill.gradient}`}
                                style={{
                                width: `${skill.percentage}%`
                                }}>
                                </div>
                            </div>
                        </div>
                        );
                    })}
                    </div>
                    </div>
                    {/* TECH STACK */}
                    <div className=" bg-white/50 rounded-2xl mt-12 p-6 backdrop-blur-sm shadow-xl"
                    data-aos="fade-right"
                    data-aos-delay="200">
                        <div className="p-2">
                            <h3 className="text-xl md:text-2xl font-sf-display font-bold mb-4 text-indigo-950 flex
                            items-center gap-3">
                                <Squares2X2Icon className="h-5 w-5 md:w-6 md:h-6 text-blue-400" />
                                    Tech Stack
                            </h3>
                        </div>
                        <div className="flex flex-wrap gap-3 p-2">
                            {techStack.map((tech) => (
                            <span
                            key={tech}
                            className="px-4 py-2 bg-linear-to-r from-blue-600 to-cyan-600
                            hover:from-blue-500 hover:to-cyan-500
                            border border-blue-400/30 rounded-full text-white
                            text-sm md:text-base font-normal font-sf-text hover:scale-105 transition-transform
                            duration-300">
                                {tech}
                            </span>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Tech Experience */}
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
                data-aos="fade-right"
                data-aos-delay="300">
                    <h3 className="text-xl md:text-2xl font-bold text-indigo-950 mb-8 flex items-center gap-3">
                        <BriefcaseIcon className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                        Experience
                    </h3> 
                    <div className="p-2 space-y-8">
                        {experiences.map((exp) => (
                            <div key={exp.id} className={`relative pl-8 border-l-2 group 
                            ${exp.borderColor}`}>
                                <div className={`absolute -left-2.25 -top-1 w-4 h-4 rounded-full group-hover:scale-125 transition-transform duration-300 
                                    ${exp.dotColor}`} />
                                <div className={`space-y-3 
                                    ${exp.borderClass}`}>
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                                        <h4 className="text-lg md:text-xl font-sf-display font-semibold text-indigo-950">
                                            {exp.position}
                                        </h4>
                                        <span className={`text-sm md:text-base text-indigo-950 font-sf-text font-thin 
                                            ${exp.dateColor}`}>
                                            {exp.period}
                                        </span>
                                    </div>
                                    <p className="text-indigo-950 text-base font-sf-display md:text-lg font-medium">
                                        {exp.company}
                                    </p>
                                    <p className="text-indigo-950/70 font-normal font-sf-text text-sm md:text-base text-justify leading-relaxed">
                                        {exp.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};