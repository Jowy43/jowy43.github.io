import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ChevronRight,
  Database,
  Server,
  Cpu,
  Globe,
  Code,
  Layers,
  Zap,
  GitBranch,
  Container,
  Terminal,
  Briefcase,
  MapPin,
  Phone,
  GraduationCap,
  BookOpen,
  CheckCircle2
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden font-sans text-slate-900">

      {/* Navbar - Floating Pill */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
        <div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-full px-6 py-3 shadow-lg flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-mono text-xs font-bold">
              JP
            </div>
            <span className="font-semibold text-slate-800 hidden sm:block">Joel Piñeiro</span>
          </div>

          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#education" className="hover:text-blue-600 transition-colors">Education</a>
          </div>

          <a href="mailto:joelps117@hotmail.es" className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors flex items-center gap-2">
            <Mail size={14} />
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-40 pb-20 px-6 container mx-auto text-center max-w-5xl">
        <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold mb-8 border border-emerald-100">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          AVAILABLE FOR HIRE
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
          Senior Software Developer <br className="hidden md:block" />
          <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">Spring Boot Expert</span>
        </h1>

        <div className="flex flex-wrap justify-center gap-4 text-slate-500 mb-8 font-mono text-sm">
          <span className="flex items-center gap-1"><MapPin size={14} /> Pontevedra, España</span>
          <span className="hidden md:inline text-slate-300">|</span>
          <span className="flex items-center gap-1"><Phone size={14} /> +34 681 24 87 14</span>
          <span className="hidden md:inline text-slate-300">|</span>
          <span className="flex items-center gap-1"><Mail size={14} /> joelps117@hotmail.es</span>
        </div>

        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Specialized in <strong>High-Performance Backend</strong>, <strong>Legacy Migrations</strong>, and <strong>AI-Driven Development</strong>.
          Proven track record of optimizing critical processes (10h ➔ 30min) and architecting microservices.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-full font-medium hover:bg-blue-700 transition-all shadow-glow hover:shadow-blue-500/25">
            <Download size={18} />
            Download CV
          </button>
          <a href="https://github.com/Jowy43" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-3.5 rounded-full font-medium hover:bg-slate-50 transition-all">
            <Github size={18} />
            GitHub
          </a>
        </div>
      </header>

      {/* About / Summary Section */}
      <section id="about" className="py-16 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 relative">
               <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-50 flex items-center justify-center text-blue-600 text-6xl font-bold border border-blue-100 shadow-inner">
                 JP
               </div>
               {/* Decorative elements */}
               <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100">
                 <div className="flex items-center gap-3">
                   <div className="bg-green-100 p-2 rounded-lg text-green-600">
                     <Code size={20} />
                   </div>
                   <div>
                     <p className="text-xs text-slate-500 font-semibold uppercase">Experience</p>
                     <p className="text-lg font-bold text-slate-900">3+ Years</p>
                   </div>
                 </div>
               </div>
            </div>

            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Briefcase className="text-blue-600" size={24} />
                Professional Summary
              </h2>
              <div className="prose prose-slate text-slate-600 leading-relaxed space-y-4">
                <p>
                  Senior Software Developer with over 3 years of experience, specialized in <strong>Spring Boot</strong> and <strong>Microservices Architectures</strong>.
                  My versatile trajectory ranges from building new solutions to high-performance optimization and modernizing critical legacy systems.
                </p>
                <p>
                  My differential value lies in technical efficiency: I combine deep mastery of <strong>Java and Databases</strong> with advanced use of <strong>Artificial Intelligence</strong> to audit code and accelerate development.
                </p>
                <p>
                  I guarantee software quality through best practices (Code Review, Git) and act as a technical reference to facilitate the training and adoption of AI tools within teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-50 p-3 rounded-xl text-blue-600"><Zap size={24} /></div>
                <h3 className="text-lg font-semibold text-slate-900">Performance</h3>
              </div>
              <p className="text-4xl font-bold text-slate-900 mb-2">95% <span className="text-base font-normal text-slate-500">Reduction</span></p>
              <p className="text-sm text-slate-600">Optimized critical process execution time from <strong>10 hours to 30 minutes</strong> using Multi-threading & SQL tuning.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-purple-50 p-3 rounded-xl text-purple-600"><Server size={24} /></div>
                <h3 className="text-lg font-semibold text-slate-900">Modernization</h3>
              </div>
              <p className="text-4xl font-bold text-slate-900 mb-2">Java 21 <span className="text-base font-normal text-slate-500">Migration</span></p>
              <p className="text-sm text-slate-600">Led the migration of a Maritime ERP from legacy systems to Spring Boot 3, Java 21 & Thymeleaf.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-emerald-50 p-3 rounded-xl text-emerald-600"><Cpu size={24} /></div>
                <h3 className="text-lg font-semibold text-slate-900">Innovation</h3>
              </div>
              <p className="text-4xl font-bold text-slate-900 mb-2">AI <span className="text-base font-normal text-slate-500">Integration</span></p>
              <p className="text-sm text-slate-600">Created custom Gems for code auditing and accelerated SDLC. Technical lead for AI adoption.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50">
           <div className="absolute top-1/3 -right-64 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl"></div>
           <div className="absolute bottom-1/3 -left-64 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Experience</h2>
            <div className="hidden md:block h-px flex-1 bg-slate-200 ml-8"></div>
          </div>

          <div className="space-y-12 border-l-2 border-slate-200 ml-3 md:ml-0 pl-8 md:pl-0">

            {/* Job 1: Nunegal */}
            <div className="relative md:grid md:grid-cols-12 gap-8 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] md:left-auto md:right-0 md:col-span-1 flex justify-center mt-1.5 md:mr-[-11px]">
                <div className="w-5 h-5 rounded-full bg-blue-600 ring-4 ring-white shadow-sm group-hover:scale-110 transition-transform"></div>
              </div>

              {/* Date Column */}
              <div className="hidden md:block col-span-3 text-right pt-1">
                <p className="font-bold text-slate-900">May 2024 - Present</p>
                <p className="text-sm text-blue-600 font-medium">Nunegal</p>
              </div>

              {/* Content Column */}
              <div className="col-span-12 md:col-span-8">
                 <div className="md:hidden mb-2">
                    <span className="text-sm font-semibold text-blue-600">Nunegal</span>
                    <span className="text-slate-400 mx-2">•</span>
                    <span className="text-sm text-slate-500">May 2024 - Present</span>
                 </div>

                 <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-soft hover:shadow-lg transition-all">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Senior Software Developer</h3>
                    <p className="text-slate-500 text-sm mb-4 italic">Legacy Modernization & AI Integration</p>

                    <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
                      <li className="flex gap-3">
                        <span className="bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-xs">✓</span>
                        <span>
                          <strong>Legacy Migration:</strong> Technical Lead in migrating a critical Maritime ERP to <strong>Java 21, Spring Boot, and Thymeleaf</strong>.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-xs">✓</span>
                        <span>
                          <strong>Re-engineering:</strong> Refactored API and complex PostgreSQL queries to ensure integrity in Jasper Reports.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-xs">✓</span>
                        <span>
                          <strong>Innovation & AI:</strong> Integrated AI tools (Custom Gems) for code auditing and optimizing dev processes.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-xs">✓</span>
                        <span>
                          <strong>DevOps Culture:</strong> Professionalized workflow with Git standardization and technical guides.
                        </span>
                      </li>
                    </ul>
                 </div>
              </div>
            </div>

            {/* Job 2: NTT DATA */}
            <div className="relative md:grid md:grid-cols-12 gap-8 group">
              <div className="absolute -left-[41px] md:left-auto md:right-0 md:col-span-1 flex justify-center mt-1.5 md:mr-[-11px]">
                <div className="w-5 h-5 rounded-full bg-slate-400 ring-4 ring-white shadow-sm group-hover:scale-110 transition-transform"></div>
              </div>

              <div className="hidden md:block col-span-3 text-right pt-1">
                <p className="font-bold text-slate-900">Apr 2024 - May 2024</p>
                <p className="text-sm text-slate-600 font-medium">NTT DATA</p>
              </div>

              <div className="col-span-12 md:col-span-8">
                 <div className="md:hidden mb-2">
                    <span className="text-sm font-semibold text-slate-700">NTT DATA</span>
                    <span className="text-slate-400 mx-2">•</span>
                    <span className="text-sm text-slate-500">Apr 2024 - May 2024</span>
                 </div>

                 <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-soft hover:shadow-lg transition-all">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Software Developer</h3>
                    <p className="text-slate-500 text-sm mb-4 italic">High Performance Optimization</p>

                    <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
                      <li className="flex gap-3">
                        <span className="bg-slate-100 text-slate-600 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-xs">✓</span>
                        <span>
                          <strong>Performance Tuning:</strong> Reduced execution time from <strong>10h to 30min</strong> using Multi-threading & SQL/MongoDB optimization.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="bg-slate-100 text-slate-600 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-xs">✓</span>
                        <span>
                          <strong>AI Adoption:</strong> Trained the team on AI tools to improve efficiency.
                        </span>
                      </li>
                    </ul>
                 </div>
              </div>
            </div>

            {/* Job 3: Imatia */}
            <div className="relative md:grid md:grid-cols-12 gap-8 group">
              <div className="absolute -left-[41px] md:left-auto md:right-0 md:col-span-1 flex justify-center mt-1.5 md:mr-[-11px]">
                <div className="w-5 h-5 rounded-full bg-slate-400 ring-4 ring-white shadow-sm group-hover:scale-110 transition-transform"></div>
              </div>

              <div className="hidden md:block col-span-3 text-right pt-1">
                <p className="font-bold text-slate-900">Mar 2022 - Apr 2024</p>
                <p className="text-sm text-slate-600 font-medium">Imatia Innovation</p>
              </div>

              <div className="col-span-12 md:col-span-8">
                 <div className="md:hidden mb-2">
                    <span className="text-sm font-semibold text-slate-700">Imatia</span>
                    <span className="text-slate-400 mx-2">•</span>
                    <span className="text-sm text-slate-500">2022 - 2024</span>
                 </div>

                 <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-soft hover:shadow-lg transition-all">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Software Developer</h3>
                    <p className="text-slate-500 text-sm mb-4 italic">Product Development & Full Stack</p>

                    <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
                      <li className="flex gap-3">
                         <span className="bg-slate-100 text-slate-600 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-xs">✓</span>
                         <span>Built a corporate CRM from scratch using <strong>Spring Boot & Angular</strong>.</span>
                      </li>
                      <li className="flex gap-3">
                         <span className="bg-slate-100 text-slate-600 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-xs">✓</span>
                         <span>Migrated a Fashion Platform to the Automotive sector (Deployment from scratch).</span>
                      </li>
                      <li className="flex gap-3">
                         <span className="bg-slate-100 text-slate-600 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-xs">✓</span>
                         <span>Microservices management using <strong>Docker</strong>.</span>
                      </li>
                    </ul>
                 </div>
              </div>
            </div>

            {/* Previous Roles (Grouped) */}
             <div className="relative md:grid md:grid-cols-12 gap-8 group opacity-75">
              <div className="absolute -left-[41px] md:left-auto md:right-0 md:col-span-1 flex justify-center mt-1.5 md:mr-[-11px]">
                <div className="w-5 h-5 rounded-full bg-slate-200 ring-4 ring-white shadow-sm"></div>
              </div>

              <div className="hidden md:block col-span-3 text-right pt-1">
                <p className="font-bold text-slate-500">2017 - 2020</p>
                <p className="text-sm text-slate-400">Early Career</p>
              </div>

              <div className="col-span-12 md:col-span-8">
                 <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="mb-2">
                        <h4 className="font-semibold text-slate-700">Intec Software</h4>
                        <p className="text-xs text-slate-500">Web Developer & Support (WordPress, Systems)</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-700">Krack Zapaterías</h4>
                        <p className="text-xs text-slate-500">IT Technician & Event Web Dev</p>
                    </div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Technical Arsenal</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Languages */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><Code size={20} className="text-blue-500"/> Languages</h3>
                    <div className="flex flex-wrap gap-2">
                        {['Java 8-21', 'JavaScript', 'SQL', 'HTML/CSS'].map(s => (
                            <span key={s} className="bg-white px-2 py-1 rounded text-sm text-slate-600 border border-slate-200">{s}</span>
                        ))}
                    </div>
                </div>

                 {/* Frameworks */}
                 <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><Layers size={20} className="text-purple-500"/> Frameworks</h3>
                    <div className="flex flex-wrap gap-2">
                        {['Spring Boot', 'Angular', 'React', 'Thymeleaf', 'Ontimize', 'Jasper Reports'].map(s => (
                            <span key={s} className="bg-white px-2 py-1 rounded text-sm text-slate-600 border border-slate-200">{s}</span>
                        ))}
                    </div>
                </div>

                 {/* Data */}
                 <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><Database size={20} className="text-emerald-500"/> Data</h3>
                    <div className="flex flex-wrap gap-2">
                        {['PostgreSQL', 'MongoDB', 'SQL Server', 'Apache Kafka'].map(s => (
                            <span key={s} className="bg-white px-2 py-1 rounded text-sm text-slate-600 border border-slate-200">{s}</span>
                        ))}
                    </div>
                </div>

                 {/* Tools */}
                 <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><Terminal size={20} className="text-orange-500"/> Tools & Ops</h3>
                    <div className="flex flex-wrap gap-2">
                        {['Git / GitHub', 'Docker', 'Jira', 'Scrum / Kanban', 'GenAI'].map(s => (
                            <span key={s} className="bg-white px-2 py-1 rounded text-sm text-slate-600 border border-slate-200">{s}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Education & Certs */}
      <section id="education" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="grid md:grid-cols-2 gap-12">
               {/* Education */}
               <div>
                   <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                       <GraduationCap className="text-blue-600" /> Education
                   </h2>
                   <div className="space-y-8 relative border-l border-slate-200 ml-3 pl-8">
                       {[
                           { title: "Senior Technician in Multiplatform App Dev", school: "IES de Teis", type: "Higher Degree" },
                           { title: "Senior Technician in Network Systems Admin", school: "IES de Teis", type: "Higher Degree" },
                           { title: "Microcomputer Systems and Networks", school: "IES Chan do Monte", type: "Technician" }
                       ].map((edu, i) => (
                           <div key={i} className="relative">
                               <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-slate-300 border-2 border-slate-50"></div>
                               <h4 className="font-bold text-slate-900">{edu.title}</h4>
                               <p className="text-blue-600 text-sm font-medium">{edu.school}</p>
                           </div>
                       ))}
                   </div>
               </div>

               {/* Certs & Languages */}
               <div>
                   <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                       <CheckCircle2 className="text-green-600" /> Certifications & Languages
                   </h2>

                   <div className="mb-8">
                       <h3 className="font-semibold text-slate-700 mb-3 uppercase text-xs tracking-wider">Certifications</h3>
                       <ul className="space-y-2">
                           {['Java Masterclass', 'Spring Boot 3 & Microservices', 'GenAI for Devs', 'Software Architecture'].map(c => (
                               <li key={c} className="flex items-center gap-2 text-slate-600 text-sm">
                                   <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> {c} (Udemy)
                               </li>
                           ))}
                       </ul>
                   </div>

                   <div>
                       <h3 className="font-semibold text-slate-700 mb-3 uppercase text-xs tracking-wider">Languages</h3>
                       <div className="flex gap-4">
                           <div className="text-center">
                               <div className="text-lg font-bold text-slate-900">Native</div>
                               <div className="text-xs text-slate-500">Spanish / Gallego</div>
                           </div>
                           <div className="w-px bg-slate-200"></div>
                           <div className="text-center">
                               <div className="text-lg font-bold text-slate-900">B1/B2</div>
                               <div className="text-xs text-slate-500">English (Intermediate)</div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-6">
         <div className="container mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center gap-6">
             <div className="text-center md:text-left">
                 <h2 className="text-2xl font-bold text-white mb-1">Joel Piñeiro Suárez</h2>
                 <p className="text-slate-500 text-sm">Senior Software Developer</p>
             </div>

             <div className="flex flex-col md:flex-row gap-6 text-sm font-medium">
                 <a href="mailto:joelps117@hotmail.es" className="hover:text-white transition-colors flex items-center gap-2">
                    <Mail size={16}/> joelps117@hotmail.es
                 </a>
                 <a href="tel:+34681248714" className="hover:text-white transition-colors flex items-center gap-2">
                    <Phone size={16}/> +34 681 24 87 14
                 </a>
                 <a href="https://github.com/Jowy43" className="hover:text-white transition-colors flex items-center gap-2">
                    <Github size={16}/> github.com/Jowy43
                 </a>
             </div>
         </div>
         <div className="text-center mt-12 text-slate-600 text-xs">
             © 2024 Joel Piñeiro. Built with React, Tailwind & deployed on GitHub Pages.
         </div>
      </footer>

    </div>
  );
};

export default App;
