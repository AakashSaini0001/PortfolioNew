import React from 'react'

const Footer = () => {
  return (
    <>
    {/* <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    * {
        font-family: 'Poppins', sans-serif;
    }
</style> */}

<footer class="flex flex-col bg-black font-extralight items-center justify-around w-full py-16 text-6xl text-gray-800/70 h-120">
      <h1 className="text-gray-300 max-w-md leading-relaxed">Connect with me</h1>
    <div className="hidden md:flex gap-8 text-gray-400 text-sm uppercase tracking-widest">
        <a className="bg-cyan-500 text-black px-6 py-2 rounded-full font-semibold text-sm hover:bg-cyan-400 transition" href="https://github.com/AakashSaini0001" target="_blank" >Github</a>
        <a className="bg-cyan-500 text-black px-6 py-2 rounded-full font-semibold text-sm hover:bg-cyan-400 transition" href="https://www.linkedin.com/in/aakash-saini-993418263/" target="_blank">LinkedIN</a>
        <a className="bg-cyan-500 text-black px-6 py-2 rounded-full font-semibold text-sm hover:bg-cyan-400 transition" href="https://x.com/home?lang=en" target="_blank" >Twitter</a>
        <a className="bg-cyan-500 text-black px-6 py-2 rounded-full font-semibold text-sm hover:bg-cyan-400 transition" href="mailto:aakashsaini0104@gmail.com" target="_blank" >Email</a>
        <a className="bg-cyan-500 text-black px-6 py-2 rounded-full font-semibold text-sm hover:bg-cyan-400 transition" href="tel:7310639070" target="_blank" >7310639070</a>
        
        {/* <a href="#projects" target="_blank"className="hover:text-white">Projects</a> */}
      </div>
</footer></>
  )
}

export default Footer