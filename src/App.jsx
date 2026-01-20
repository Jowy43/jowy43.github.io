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
  CheckCircle2,
  Lock,
  MessageSquare,
  Repeat
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
            <a href="#impact" className="hover:text-blue-600 transition-colors">Impact</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
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
          🚀 Record: 95% Optimization (10h ➔ 30min)
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
          Senior Backend Engineer <br className="hidden md:block" />
          <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
             High-Performance Systems & AI Tooling
          </span>
        </h1>

        <div className="flex flex-wrap justify-center gap-4 text-slate-500 mb-8 font-mono text-xs md:text-sm">
          <span className="flex items-center gap-1"><MapPin size={14} /> Pontevedra, España</span>
          <span className="hidden md:inline text-slate-300">|</span>
          <a href="https://www.linkedin.com/in/joel-piñeiro-suárez-834199203" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
            <Linkedin size={14} /> LinkedIn
          </a>
          <span className="hidden md:inline text-slate-300">|</span>
          <span className="flex items-center gap-1"><Mail size={14} /> joelps117@hotmail.es</span>
        </div>

        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          <strong>Java 21 & Spring Boot Expert.</strong> I transform complex business logic into scalable architectures and build AI tools (Gems/Analyzers) to automate workflows.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="/Joel_Pineiro_CV.pdf" download="Joel_Pineiro_CV.pdf" className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-full font-medium hover:bg-blue-700 transition-all shadow-glow hover:shadow-blue-500/25">
            <Download size={18} />
            Download CV
          </a>
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
            </div>

            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Briefcase className="text-blue-600" size={24} />
                Professional Summary
              </h2>
              <div className="prose prose-slate text-slate-600 leading-relaxed space-y-4">
                <p>
                  Senior Software Developer with <strong>3+ years of experience</strong>, highly specialized in backend development with <strong>Spring Boot</strong> and <strong>Microservices architectures</strong>. I bring solid experience in technical coordination, ensuring code quality and efficiency in critical implementations.
                </p>
                <p>
                  I have worked in diverse sectors such as <strong>Maritime, ERP, Fashion, Automotive, and Energy</strong>, demonstrating adaptability to various technological and business challenges.
                </p>
                <p>
                  Currently, I develop proprietary solutions based on <strong>Artificial Intelligence (Gems and analyzers)</strong> to automate processes and optimize code quality. My focus on continuous improvement and mastery of agile methodologies drives me to deliver scalable, high-performance solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics (Featured Projects) */}
      <section id="impact" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Impact</h2>
            <p className="text-slate-600">Quantifiable results and architectural achievements.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Performance */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-soft hover:shadow-lg transition-all group relative overflow-hidden">
               <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
               <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                <Zap size={24} />
              </div>
              <div className="mb-4">
                  <h3 className="text-xl font-bold text-slate-900">Extreme Performance</h3>
                  <p className="text-sm text-blue-600 font-medium">NTT DATA</p>
              </div>
              <div className="flex gap-2 mb-4 text-xs font-mono text-slate-500">
                  <span className="bg-slate-100 px-2 py-1 rounded">Multithreading</span>
                  <span className="bg-slate-100 px-2 py-1 rounded">SQL Tuning</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Redesigned critical multi-threaded processes and optimized massive DB queries. Achieved a reduction in batch process execution time from <strong>10 hours to just 30 minutes</strong>, drastically increasing system availability.
              </p>
            </div>

            {/* Card 2: Architecture */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-soft hover:shadow-lg transition-all group relative overflow-hidden">
               <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
               <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                <Layers size={24} />
              </div>
               <div className="mb-4">
                  <h3 className="text-xl font-bold text-slate-900">DDD & Event-Driven</h3>
                  <p className="text-sm text-purple-600 font-medium">Imatia</p>
              </div>
               <div className="flex gap-2 mb-4 text-xs font-mono text-slate-500">
                  <span className="bg-slate-100 px-2 py-1 rounded">Kafka</span>
                  <span className="bg-slate-100 px-2 py-1 rounded">Keycloak</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Developed scalable microservices under <strong>Domain-Driven Design (DDD)</strong> principles. Implemented centralized security with Keycloak and orchestrated asynchronous messaging using <strong>Apache Kafka</strong> for high concurrency.
              </p>
            </div>

            {/* Card 3: AI Innovation */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-soft hover:shadow-lg transition-all group relative overflow-hidden">
               <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
               <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                <Cpu size={24} />
              </div>
              <div className="mb-4">
                  <h3 className="text-xl font-bold text-slate-900">AI Tooling & Auto</h3>
                  <p className="text-sm text-emerald-600 font-medium">Nunegal</p>
              </div>
               <div className="flex gap-2 mb-4 text-xs font-mono text-slate-500">
                  <span className="bg-slate-100 px-2 py-1 rounded">GenAI</span>
                  <span className="bg-slate-100 px-2 py-1 rounded">Analyzers</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Created internal tools to empower the team: developed <strong>Custom Gems</strong> for automatic format translations and <strong>AI Code Analyzers</strong> that standardize and speed up Pull Request reviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Experience Timeline</h2>
            <div className="hidden md:block h-px flex-1 bg-slate-200 ml-8"></div>
          </div>

          <div className="space-y-12 border-l-2 border-slate-200 ml-3 md:ml-0 pl-8 md:pl-0">

            {/* Job 1: Nunegal */}
            <div className="relative md:grid md:grid-cols-12 gap-8 group">
              <div className="absolute -left-[41px] md:left-auto md:right-0 md:col-span-1 flex justify-center mt-1.5 md:mr-[-11px]">
                <div className="w-5 h-5 rounded-full bg-blue-600 ring-4 ring-white shadow-sm group-hover:scale-110 transition-transform"></div>
              </div>
              <div className="hidden md:block col-span-3 text-right pt-1">
                <p className="font-bold text-slate-900">May 2025 - Present</p>
                <p className="text-sm text-blue-600 font-medium">Nunegal</p>
              </div>
              <div className="col-span-12 md:col-span-8">
                 <div className="md:hidden mb-2">
                    <span className="text-sm font-semibold text-blue-600">Nunegal</span>
                    <span className="text-slate-400 mx-2">•</span>
                    <span className="text-sm text-slate-500">May 2025 - Present</span>
                 </div>
                 <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-all">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Senior Backend Developer & AI Tooling Creator</h3>
                    <p className="text-slate-500 text-sm mb-4 italic">Maritime Sector • Legacy Migration</p>
                    <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
                      <li className="flex gap-3"><span className="text-blue-500">✓</span><span><strong>Core Backend (Migration):</strong> Technical execution of migrating a Maritime ERP to <strong>Java 21 & Spring Boot</strong>.</span></li>
                      <li className="flex gap-3"><span className="text-blue-500">✓</span><span><strong>AI Automation:</strong> Developing custom Gems for translations and code analyzers to standardize PR reviews.</span></li>
                      <li className="flex gap-3"><span className="text-blue-500">✓</span><span><strong>Data Engineering:</strong> Re-engineering complex PostgreSQL queries for Jasper Reports continuity.</span></li>
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
                <p className="font-bold text-slate-900">Apr 2024 - May 2025</p>
                <p className="text-sm text-slate-600 font-medium">NTT DATA</p>
              </div>
              <div className="col-span-12 md:col-span-8">
                 <div className="md:hidden mb-2">
                    <span className="text-sm font-semibold text-slate-700">NTT DATA</span>
                    <span className="text-slate-400 mx-2">•</span>
                    <span className="text-sm text-slate-500">2024 - 2025</span>
                 </div>
                 <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-all">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Performance Specialist & Backend Developer</h3>
                    <p className="text-slate-500 text-sm mb-4 italic">High Performance • React Integration</p>
                    <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
                      <li className="flex gap-3"><span className="text-slate-400">✓</span><span><strong>Optimization:</strong> Reduced execution times by 95% (10h to 30min) using advanced multithreading.</span></li>
                      <li className="flex gap-3"><span className="text-slate-400">✓</span><span><strong>Database:</strong> Integral management of MongoDB and SQL Server structures.</span></li>
                      <li className="flex gap-3"><span className="text-slate-400">✓</span><span><strong>AI Leadership:</strong> Responsible for integrating AI tools to improve team efficiency.</span></li>
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
                 <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-all">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Full Stack Engineer</h3>
                    <p className="text-slate-500 text-sm mb-4 italic">Fashion & Automotive • DDD Architecture</p>
                    <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
                      <li className="flex gap-3"><span className="text-slate-400">✓</span><span><strong>Architecture:</strong> Scalable microservices with DDD, Keycloak security, and Apache Kafka.</span></li>
                      <li className="flex gap-3"><span className="text-slate-400">✓</span><span><strong>Migration:</strong> Independent management of adapting the platform for the Automotive sector.</span></li>
                      <li className="flex gap-3"><span className="text-slate-400">✓</span><span><strong>Docker:</strong> Container orchestration and deployment scripting.</span></li>
                    </ul>
                 </div>
              </div>
            </div>

             {/* Previous Roles */}
             <div className="relative md:grid md:grid-cols-12 gap-8 group opacity-60 hover:opacity-100 transition-opacity">
               <div className="absolute -left-[41px] md:left-auto md:right-0 md:col-span-1 flex justify-center mt-1.5 md:mr-[-11px]">
                <div className="w-5 h-5 rounded-full bg-slate-200 ring-4 ring-white shadow-sm"></div>
              </div>
              <div className="hidden md:block col-span-3 text-right pt-1">
                <p className="font-bold text-slate-500">2017 - 2020</p>
                <p className="text-sm text-slate-400">Early Career</p>
              </div>
              <div className="col-span-12 md:col-span-8">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                     <p className="text-sm text-slate-600"><strong>Intec Software</strong> (2020) & <strong>Krack Zapaterías</strong> (2017)</p>
                     <p className="text-xs text-slate-500">Web Development (WordPress) & Technical Support</p>
                  </div>
              </div>
             </div>

          </div>
        </div>
      </section>

      {/* Skills Grid - Categorized */}
      <section id="skills" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Tech Stack</h2>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Core Backend */}
                <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm">
                    <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-3">
                        <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Code size={20} /></div>
                        Core Backend (Expert)
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {['Java 21', 'Spring Boot', 'PostgreSQL', 'SQL Server', 'MongoDB'].map(s => (
                            <span key={s} className="bg-slate-50 px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 border border-slate-200">{s}</span>
                        ))}
                    </div>
                </div>

                 {/* Architecture & DevOps */}
                 <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm">
                    <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-3">
                        <div className="bg-purple-100 p-2 rounded-lg text-purple-600"><Layers size={20} /></div>
                        Architecture & DevOps
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {['Apache Kafka', 'Keycloak', 'Docker', 'Microservices', 'DDD', 'Git'].map(s => (
                            <span key={s} className="bg-slate-50 px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 border border-slate-200">{s}</span>
                        ))}
                    </div>
                </div>

                 {/* AI & Tooling */}
                 <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm">
                    <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-3">
                        <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600"><Cpu size={20} /></div>
                        AI & Tooling
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {['GenAI Integration', 'Custom Gems', 'Prompt Engineering', 'Code Analyzers'].map(s => (
                            <span key={s} className="bg-slate-50 px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 border border-slate-200">{s}</span>
                        ))}
                    </div>
                </div>

                 {/* Frontend & Ecosystem */}
                 <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm">
                    <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-3">
                        <div className="bg-orange-100 p-2 rounded-lg text-orange-600"><Globe size={20} /></div>
                        Frontend & Ecosystem
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {['Angular', 'React', 'Jira', 'Thymeleaf', 'Jasper Reports'].map(s => (
                            <span key={s} className="bg-slate-50 px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 border border-slate-200">{s}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Education & Certs */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="grid md:grid-cols-2 gap-12">
               <div>
                   <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                       <GraduationCap className="text-blue-600" /> Education
                   </h2>
                   <div className="space-y-6">
                       {[
                           { title: "Senior Technician in Multiplatform App Dev", school: "IES de Teis" },
                           { title: "Senior Technician in Network Systems Admin", school: "IES de Teis" },
                           { title: "Microcomputer Systems and Networks", school: "IES Chan do Monte" }
                       ].map((edu, i) => (
                           <div key={i} className="pl-4 border-l-2 border-slate-100">
                               <h4 className="font-bold text-slate-900 text-sm">{edu.title}</h4>
                               <p className="text-slate-500 text-xs">{edu.school}</p>
                           </div>
                       ))}
                   </div>
               </div>

               <div>
                   <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                       <CheckCircle2 className="text-green-600" /> Certifications
                   </h2>
                   <ul className="space-y-3">
                       {['Java Masterclass', 'Spring Boot 3 & Microservices', 'GenAI for Devs', 'Software Architecture'].map(c => (
                           <li key={c} className="flex items-center gap-2 text-slate-700 text-sm bg-slate-50 px-3 py-2 rounded-lg border border-slate-100">
                               <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> {c}
                           </li>
                       ))}
                   </ul>
               </div>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-6">
         <div className="container mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center gap-6">
             <div className="text-center md:text-left">
                 <h2 className="text-2xl font-bold text-white mb-1">Joel Piñeiro Suárez</h2>
                 <p className="text-slate-500 text-sm">Senior Backend Engineer</p>
             </div>

             <div className="flex flex-col md:flex-row gap-6 text-sm font-medium">
                 <a href="mailto:joelps117@hotmail.es" className="hover:text-white transition-colors flex items-center gap-2">
                    <Mail size={16}/> joelps117@hotmail.es
                 </a>
                 <a href="https://www.linkedin.com/in/joel-piñeiro-suárez-834199203" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                    <Linkedin size={16}/> LinkedIn
                 </a>
                 <a href="https://github.com/Jowy43" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                    <Github size={16}/> GitHub
                 </a>
             </div>
         </div>
      </footer>

    </div>
  );
};

export default App;
