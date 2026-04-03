import profile from './image.png';
import resume from './Resume_Aakash_Saini.pdf';
const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center bg-black min-h-screen">
      <div className="md:w-1/2 space-y-6 p-8 rounded-3xl 
      bg-gradient-to-br from-purple-900/40 via-purple-700/20 to-transparent 
      backdrop-blur-xl border border-white/10 shadow-xl">

      <a 
        href="#footer" 
        // target='_blank'
        className="border border-gray-600 px-3 py-2 rounded-full text-[10px] text-gray-400 uppercase inline-block"
      >
        Tap To Connect
      </a>

      <h1 className="text-6xl font-bold text-white leading-tight">
        Hi, I'm <span className="text-cyan-400">Aakash Saini</span>
      </h1>

      <p className="text-gray-300 max-w-md leading-relaxed">
        A full-stack developer crafting web applications. Hands-on experience in high-performance web apps.
      </p>

      <div className="flex gap-4">
        <a 
          href={resume} 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-500 text-black px-6 py-2 rounded-md font-semibold text-sm hover:bg-gray-400 transition"
        >
          View Resume
        </a>

        <a 
          href="https://github.com/AakashSaini0001"
          target='_blank'
          className="bg-gray-500 text-black px-6 py-2 rounded-md font-semibold text-sm hover:bg-gray-400 transition"
        >
          Github
        </a>
      </div>

    </div>
      <div className='flex item-center justify-center'>
      <div className="md:w-1/2 mt-12 md:mt-0 relative">
        <img src={profile} alt="Profile" className="rounded-3xl w-full grayscale-50 max-w-md mx-auto h-auto bg-gradient-to-bl" />
      </div>
        {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 w-64">
          <p className="text-[10px] text-gray-400 uppercase">Aakash Saini</p>
          <p className="text-white font-medium">Full Stack Developer</p>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;