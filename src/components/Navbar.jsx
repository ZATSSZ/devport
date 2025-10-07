{/* 🌙 Navbar */}
<nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/40 z-50 flex justify-between items-center px-10 py-4">
  <h1
    className="text-2xl font-bold text-orange-500 cursor-pointer"
    onClick={() => scroll.scrollToTop()}
  >
    MyPortfolio
  </h1>

  <ul className="hidden md:flex gap-8">
    {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
      <ScrollLink
        key={item}
        to={item.toLowerCase()}
        smooth={true}
        duration={600}
        spy={true}
        offset={-70}
        activeClass="text-orange-400 border-b-2 border-orange-400"
        className="hover:text-orange-400 transition cursor-pointer"
      >
        {item}
      </ScrollLink>
    ))}
  </ul>

  <button
    onClick={() => setDarkMode(!darkMode)}
    className="p-2 rounded-full hover:scale-110 transition-transform"
  >
    {darkMode ? <Sun size={24} /> : <Moon size={24} />}
  </button>
</nav>
