import "./App.css";

function App() {
  return (
    <div className="w-full flex flex-col items-center overflow-x-hidden px-4"> 
      <nav className="w-full max-w-[1400px] flex flex-wrap items-center justify-between gap-4 pt-7 pb-4">
        <a href="#" className="flex items-center">
          <h5 className="text-white text-3xl font-medium">Area</h5>
        </a>
        <div className="flex flex-wrap justify-center items-center gap-6">
          <a className="a-Benefits text-white font-medium hover:text-blue-400 transition-all duration-700 relative pb-1" href="#">Benefits</a>
          <a className="a-Specifications text-white font-medium hover:text-blue-400 transition-all duration-700 relative pb-1" href="#">Specifications</a>
          <a className="a-How-to text-white font-medium hover:text-blue-400 transition-all duration-700 relative pb-1" href="#">How-to</a>
          <a className="a-Contact-Us text-white font-medium hover:text-blue-400 transition-all duration-700 relative pb-1" href="#">Contact Us</a>
        </div>
        <button className="button-Learn-More w-[140px] h-[50px] rounded-3xl text-white bg-lime-950 flex items-center justify-center gap-2 hover:text-blue-300 transition-all duration-700 px-3">
          <a className="block font-medium" href="#">Learn More</a>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
            <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v10.5a.75.75 0 01-1.5 0V4.5a.75.75 0 01.75-.75z" clipRule="evenodd"/>
            <path fillRule="evenodd" d="M9.47 9.47a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06L12 11.06l-3.19 3.19a.75.75 0 01-1.06-1.06l3.75-3.75z" clipRule="evenodd"/>
          </svg>
        </button>
      </nav>

      <main className="w-full max-w-[1400px] flex flex-col items-center justify-center px-4 mt-10 mb-20"> {/* Increased mb to 20 */}
        <h1 className="text-white text-6xl sm:text-7xl lg:text-9xl font-bold text-center mt-8 hover:text-cyan-400 transition-all duration-700">
          Browse everything.
        </h1>

        <div className="relative w-full max-w-[1200px] flex flex-wrap justify-center items-center gap-8 mt-16 px-4"> 
          <div className="card w-full max-w-[790px] h-auto min-h-[350px] rounded-4xl flex items-center justify-center text-white font-bold text-xl shadow-lg z-0 p-4">
            
          </div>
          <img
            src="/images/works-images-1.png"
            className="absolute max-md:static max-md:mt-6 max-md:relative w-full max-w-[550px] h-auto rounded-2xl shadow-xl z-10 hover:scale-105 transition-transform duration-700" 
            alt="Work illustration"
          />
        </div>
      </main>
    </div>
  );
}

export default App;