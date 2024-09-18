import Link from 'next/link'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from 'next/image';

export default function Page() {
  return (
    <div className='h-[calc(100vh-4rem)] overflow-y-scroll snap-mandatory snap-y relative'>
      
      <section className='h-[calc(100vh-4rem)] snap-start flex flex-col relative justify-center items-center' id="welcome-section" style={{backgroundColor: '#232323'}}>
        <h1 className='font-extrabold text-xl sm:text-6xl italic text-wit' style={{margin: '30px'}}>Arnaud Lalande</h1>
        <h2 className='font-extralight text-2xl sm:text-4xl italic text-gold' >Junior developer</h2>
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-4 animate-bounce">
          <a href="#studies">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mx-auto text-gray-500"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12l-7.5 7.5L4.5 12" />
            </svg>
          </a>
        </div>
      </section>

      <section className='h-[calc(100vh-4rem)] bg-gray-100 snap-start flex flex-col relative justify-center items-center' id="studies">
          <h1 className="font-extrabold text-4xl sm:text-6xl italic text-center pb-20">My academic background includes</h1>
            <div className='flex flex-row '>

              {/* Keimyung University */}
              <div className="w-full md:w-1/2 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <a href="https://search.isepstudyabroad.org/University/Detail/b4f15f5a-4f18-4351-bbea-55d3655c63cd">
                    <Image
                      width={150}
                      height={150} 
                      src="https://cha-xeo.github.io/PortfolioFiles/keimyung.png" 
                      className="w-full pt-5 h-64 object-contain" 
                      alt="Daegu" 
                      />
                  </a>
                  <div className="p-6">
                    <h5 className="text-xl font-semibold mb-4">Keymiung University</h5>
                    <p className="text-gray-600 mb-4">Keymiung University located in Daegu</p>
                  </div>
                </div>
              </div>

              {/* Epitech University */}
              <div className="w-full md:w-1/2 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <a href="https://www.epitech.eu/">
                    <Image
                      width={150}
                      height={150} 
                      src="https://cha-xeo.github.io/PortfolioFiles/Epitech2.png" 
                      className="rounded-lg pt-5 w-full h-64 object-contain" 
                      alt="Epitech" 
                      />
                  </a>
                  <div className="p-6">
                    <h5 className="text-xl font-semibold mb-4">Epitech University</h5>
                    <p className="text-gray-600 mb-4">Epitech University located in Marseille</p>
                  </div>
                </div>
              </div>
            </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-4 animate-bounce">
          <a href="#contacts">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mx-auto text-gray-500"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12l-7.5 7.5L4.5 12" />
            </svg>
          </a>
        </div>

      </section>

      <section className='h-[calc(100vh-4rem)] snap-start relative flex flex-col justify-between items-center' id="contacts" style={{backgroundColor: '#232323'}}>
        <h1 className='font-extrabold text-4xl sm:text-6xl italic self-center text-wit py-24'>Contact me</h1>
        <div id="links" className="flex-grow flex items-center justify-center">
          <ul className="flex flex-col items-center space-y-4 text-lg">
            <li>
              <a href="https://www.linkedin.com/in/arnaud-lalande/" className="flex items-center space-x-2 text-gold hover:text-wit transition-colors">
                <i className="fab fa-linkedin text-2xl"></i>
                <span >LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://chachamaru.itch.io"  className="flex items-center space-x-2 text-gold hover:text-wit transition-colors">
                <i className="fab fa-itch-io text-2xl"></i>
                <span >Itch.io</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/Cha-xeo" className="flex items-center space-x-2 text-gold hover:text-wit transition-colors">
                <i className="fab fa-github text-2xl"></i>
                <span >GitHub</span>
              </a>
            </li>
            <li>
              <a href="mailto:arnaud.lalande@outlook.fr" className="flex items-center space-x-2 text-gold hover:text-wit transition-colors">
                <i className="fas fa-envelope-open-text text-2xl"></i>
                <span >arnaud.lalande&#64;outlook.fr</span>
              </a>
            </li>
            <li>
              <a href="tel:+330638041196" className="flex items-center space-x-2 text-gold hover:text-wit transition-colors">
                <i className="fas fa-phone text-2xl"></i>
                <span >+330638041196</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </ div>
  );
}