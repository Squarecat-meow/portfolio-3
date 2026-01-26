import ScrollDown from './ScrollDown';

function Hero() {
  return (
    <main
      id="hero"
      className="min-h-screen grid grid-cols-1 lg:grid-cols-5 gap-2 place-items-center"
    >
      <div className="col-span-2">
        <p className="text-xs font-light tracking-[1em]">FRONTEND ENGINEER</p>
        <h1 className="font-heading text-6xl lg:text-8xl">
          Create
          <br /> <span className="italic text-rose-400">With</span>
          <br /> Purpose
        </h1>
        <div className="mt-8 flex items-center gap-2">
          <div className="w-24 border-b border-b-slate-800" />
          <p className="font-heading text-3xl">Jung Sae Ron</p>
        </div>
      </div>
      <div className="h-full flex flex-col justify-center items-center">
        <div className="hidden lg:block h-1/3 border-r border-r-black" />
        <ScrollDown />
      </div>
    </main>
  );
}

export default Hero;
