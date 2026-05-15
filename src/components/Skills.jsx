import {
  BriefcaseIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  SpeakerWaveIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/solid";

const skills = [
  {
    id: 1,
    title: "Frontend Development",
    icon: CodeBracketIcon,
    iconColor: "text-blue-400",
    percentage: 90,
    percentageColor: "text-cyan-500 text-xs md:text-sm",
    gradient: "bg-gradient-to-r from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Language",
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
    title: "Website Development",
    icon: DevicePhoneMobileIcon,
    iconColor: "text-blue-400",
    percentage: 80,
    percentageColor: "text-cyan-500 text-xs md:text-sm",
    gradient: "bg-gradient-to-r from-blue-500 to-cyan-500"
  },
];

const experiences = [
  {
    id: 1,
    position: "UI/UX Designer",
    company: "PT. Impactbyte Teknologi Edukasi Jakarta",
    period: "2023 - 2024",
    desc: "Focused on creating modern and user-friendly interface designs, wireframing, prototyping, and improving user experience for web and mobile applications.",
    borderColor: "border-cyan-500/30",
    dotColor: "bg-cyan-500",
    borderClass: "border-cyan-500/20",
    dateColor: "text-indigo-950 text-xs md:text-sm font-semibold"
  },
  {
    id: 2,
    position: "Admin Operating of CBT System",
    company: "Haji Syukron Foundation Cilacap",
    period: "2024 - Present",
    desc: "Managing operational systems, maintaining digital administration, and supporting daily technical activities to ensure smooth organizational workflows.",
    borderColor: "border-blue-500/30",
    dotColor: "bg-blue-500",
    borderClass: "border-blue-500/20",
    dateColor: "text-indigo-950 text-xs md:text-sm font-semibold"
  },
  {
    id: 3,
    position: "Tutor English",
    company: "English Stars Academy Cilacap",
    period: "2024 - Present",
    desc: "Managed and input exam questions into the CBT system and ensured the smooth execution of TOEFL examinations. Assisted participants with technical or procedural issues during the exam while providing excellent customer service to maintain an organized testing experience.",
    borderColor: "border-blue-500/30",
    dotColor: "bg-blue-500",
    borderClass: "border-blue-500/20",
    dateColor: "text-indigo-950 text-xs md:text-sm font-semibold"
  },
];

const techStack = [
  "Tailwind CSS",
  "Vue js",
  "React js",
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
                <h2 className="text-3xl md:text-4xl font-bold text-indigo-950 mb-4">
                    Skills<span className="text-transparent bg-clip-text bg-linear-to-r
                    from-blue-500 to-cyan-500"> & Experience</span>
                </h2>
                <p className="text-indigo-950 font-medium text-base md:text-lg max-w-2xl mx-auto">
                    My technical expertise and professional journey
                </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                <div data-aos="fade-right">
                    <h3 className="text-xl md:text-2xl font-bold text-indigo-950 mb-8 flex
                    items-center gap-3">
                        Technical Skills
                    </h3>
                    {/* Percentase skills */}
                    <div className="space-y-6 bg-white/50 rounded-2xl p-6 backdrop-blur-sm shadow-xl">
                        {skills.map((skill) => {
                            const Icon = skill.icon;
                            return (
                        <div
                        key={skill.id}
                        className="group">
                            <div className="flex items-center justify-between mb-3 ">
                                <span className="text-indigo-950 font-bold
                                flex items-center text-sm md:text-base gap-2">
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
                    {/* TECH STACK */}
                    <div className="mt-12">
                        <h3 className="text-xl md:text-2xl font-bold text-indigo-950 mb-8 flex
                    items-center gap-3">
                            <Squares2X2Icon className="h-5 w-5 md:w-6 md:h-6 text-blue-400" />
                            Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-3 bg-white/50 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
                            {techStack.map((tech) => (
                            <span
                            key={tech}
                            className="px-4 py-2 bg-linear-to-r from-blue-600 to-cyan-600
                            hover:from-blue-500 hover:to-cyan-500
                            border border-blue-400/30 rounded-full text-white
                            text-xs md:text-sm font-medium hover:scale-105 transition-transform
                            duration-300">
                                {tech}
                            </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div 
                data-aos="fade-left">
                    <h3 className="text-xl md:text-2xl font-bold text-indigo-950 mb-8 flex
                    items-center gap-3">
                        <BriefcaseIcon className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                        Experience
                    </h3>
                    <div className="space-y-8">
                        {experiences.map((exp) => (
                            <div
                            key={exp.id}
                            className={`relative pl-8 border-l-2 group
                                ${exp.borderColor}`}>
                                <div className={`absolute -left-2 top-0 w-4 h-4 rounded-full
                                group-hover:scale-150 transition-transform duration-300
                                    ${exp.dotColor}`}>
                                </div>
                                <div className={`bg-white/50 rounded-2xl p-6 backdrop-blur-sm shadow-xl
                                    ${exp.borderClass}`}>
                                    <div className="flex flex-col sm:flex-row sm:items-center
                                    sm:justify-between mb-3">
                                        <h4 className="text-base md:text-lg font-bold text-indigo-950">
                                            {exp.position}
                                        </h4>
                                        <span className={`${exp.dateColor}mt-1 sm:mt-0`}>
                                            {exp.period}
                                        </span>
                                    </div>
                                    <p className='text-indigo-950 text-sm md:text-base font-medium mb-3'>
                                        {exp.company}
                                    </p>
                                    <p className="text-indigo-950 text-xs md:text-sm leading-relaxed">
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