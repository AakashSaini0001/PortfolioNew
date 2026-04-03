import project1 from './project1.png';
import project2 from './project2.png';
import project3 from './project3.png';
const ProjectCard = ({ title, desc, tags, img, link }) => (
  <div className="group bg-black rounded-2xl overflow-hidden relative">
    
    <img 
      src={img} 
      alt={title} 
      className="w-full h-64 object-cover opacity-80 group-hover:scale-105 transition duration-500" 
    />

    <div className="p-6">
      
      {/* Title + Button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        
        <div>
          <h3 className="text-white font-bold text-xl">{title}</h3>
          <p className="text-gray-500 text-sm mt-1">{desc}</p>
        </div>

        <a 
          href={link} 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cyan-500 text-black px-4 py-2 rounded-full font-semibold text-xs sm:text-sm hover:bg-cyan-400 transition text-center"
        >
          Live Demo
        </a>

      </div>

      {/* Tags (WRAP FIX) */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="bg-white/5 px-2 py-1 rounded text-[10px] text-gray-400 uppercase"
          >
            {tag}
          </span>
        ))}
      </div>

    </div>
  </div>
);

const Projects = () => {
  return (
    <section className="py-20 px-10 bg-[#0a0a0a]">
      <div className="flex justify-center items-center mb-10">
        <div className=" text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Technical <span className="text-cyan-400">Projects.</span></h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto text-md">I have developed and polished my skills in back-end logic with interactive and refined front-end aesthetics.</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <ProjectCard title="Car Rental Webapp" desc="Scalable car rental platform to rent and list cars" tags={['Node.js', 'React', 'Mongodb', 'Express', 'Tailwind CSS', 'Axios']} img={project1} link="https://car-rental-gs.vercel.app/" />
        <ProjectCard title="Notes Webapp" desc="Scalable car rental platform to rent and list cars" tags={['Node.js', 'React', 'Mongodb', 'Express', 'Tailwind CSS', 'Axios']} img={project2} link="https://daybook-mern.vercel.app/login" />
        <ProjectCard title="Password Generator Webapp" desc="Generate easy to remember strong password" tags={['Node.js', 'React', 'Express', 'Tailwind CSS', 'Axios']} img={project3} link="https://passward-generator-v2.vercel.app/" />
      </div>
    </section>
  );
};

export default Projects;