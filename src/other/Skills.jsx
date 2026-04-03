const Skills = () => {
  const tech = ["C++", "JavaScript", "HTML", "CSS", "Tailwind", "Node", "Express", "MongoDB", "Postman", "Selenium", "DBMS", "SQL", "OOP"];
  
  return (
    <section className="py-20 bg-black text-center px-10">
      <h2 className="text-4xl font-bold text-white mb-4">Technical <span className="text-cyan-400">Skills.</span></h2>
      <p className="text-gray-500 mb-12 max-w-2xl mx-auto text-sm">Hands-on project experience in back-end logic with interactive and refined front-end aesthetics.</p>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {tech.map((item) => (
          <div key={item} className="bg-[#111] border border-white/5 p-8 rounded-xl hover:border-cyan-500 transition cursor-default">
            <p className="text-cyan-400 text-s font-mono">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;