import Link from 'next/link'


export default function Page() {
  return (
    <>
      <section id="welcome-section">
        <h1>Arnaud Lalande</h1>
        <h2>Junior developer</h2>
      </section>

      <section id="studies">
        <div className="bg-gray-100 flex items-center justify-center">
          <h1>My academic background includes</h1>
        </div>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" >
              <a href="https://search.isepstudyabroad.org/University/Detail/b4f15f5a-4f18-4351-bbea-55d3655c63cd">
                <img src="https://cha-xeo.github.io/PortfolioFiles/keimyung.png" className="w-full h-48 object-cover" alt="Daegu" />
              </a>
              <div className="p-6">
                <h5 className="text-xl font-semibold mb-4">Keymiung</h5>
                <p className="text-gray-600 mb-4">Keymiung university located in Deagu</p>
              </div>
            </div>
            <div style={{width: 150}}>&nbsp;</div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" >
              <a href="https://www.epitech.eu/">
                <img src="https://cha-xeo.github.io/PortfolioFiles/Epitech.jpg" className="w-full h-48 object-cover"  alt="Marseille" />
              </a>
              <div className="p-6">
                <h5 className="text-xl font-semibold mb-4">Epitech</h5>
                <p className="text-gray-600 mb-4">Epitech university located in Marseille</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts">
        <h1>Contact me</h1>

        <div id="links">
          <ul>
            <li><a href="https://www.linkedin.com/in/arnaud-lalande/"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
            <li><a href="https://chachamaru.itch.io"><i className="fab fa-itch-io"></i> Itch.io</a></li>
            <li><a href="https://github.com/Cha-xeo"><i className="fab fa-github"></i> GitHub</a></li>
            <li><a href="mailto:arnaud.lalande@outlook.fr"><i className="fas fa-envelope-open-text"></i> arnaud.lalande&#64;outlook.fr</a></li>
            <li><a href="tel:+330638041196"><i className="fas fa-phone"></i> Phone +330638041196</a></li>
          </ul>
        </div>
      </section>
    </>
  );
}