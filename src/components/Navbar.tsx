function Navbar() {
  return (
    <nav className="w-full h-12 fixed inset-0 flex justify-center items-center z-[2]">
      <div className="w-[85%] flex justify-between">
        <h1 className="font-bold">
          JSR<span className="text-red-500">.</span>
        </h1>
        <div className="flex gap-4 lg:gap-12">
          <a href="#section-1" className="font-light">
            Home
          </a>
          <a href="#section-2" className="font-light">
            About
          </a>
          <a href="#section-3" className="font-light">
            Project
          </a>
          <a href="#section-4" className="font-light">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
