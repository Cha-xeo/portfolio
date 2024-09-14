import Link from 'next/link'


export default function Page() {
  return (
    <div className="relative" >
        <section className='h-[calc(100vh-4rem)]' id="intership">
            <article className='py-10'>
                <div className="md:container md:mx-auto">
                    {/* <img className="float-right rounded-full w-36 h-36 " src="https://cha-xeo.github.io/PortfolioFiles/me.png"  alt="Me" /> */}
                    <h2 className='text-center py-5'>My years at Epitech</h2> <br />
                    <p className='clear-left'>I started my journey as a developer in 2020 when I joined Epitech. <br />
                        The first years were challenging as Epitech uses a project-based curriculum. 
                        It allowed me to learn how to learn, work in groups, and work independently. 
                        I also had the opportunity to spend a year in South Korea at Keimyung University. <br />
                        Keimyung offers many programs, and I was enrolled in a video game creation program. 
                        Some of those projects are available to play on this site in the Games section.
                    </p>
                </div>
            </article>
            <article className="bg-gray-100 py-24 pb-24">
                <div className="md:container md:mx-auto">
                    <div className="text-center mb-4">
                        <h2 className="text-2xl font-bold">My Hobbies</h2>
                        <p className="text-lg">Some of the things I like.</p>
                    </div>
                    <div className="flex flex-wrap mx-4">

                        <div className=" w-full md:w-1/3 px-4">
                            <div className="min-h-64 bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="p-6">
                                    <h5 className="text-center text-xl font-semibold mb-4">Video games</h5>
                                    <p className="text-gray-600 mb-4">I have always played video games. My first video game ever was kingdom hearts II and since then I loved video games.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-4">
                            <div className="min-h-64 bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="p-6">
                                    <h5 className="text-center text-xl font-semibold mb-4">Books</h5>
                                    <p className="text-gray-600 mb-4">Since I am a child I always loved fantasy novel and mangas.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-4">
                            <div className="min-h-64 bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="p-6">
                                    <h5 className="text-center text-xl font-semibold mb-4">Travels</h5>
                                    <p className="text-gray-600 mb-4">I had the opportunity to spend a year in South Korea and since then I am planning to visit new places.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </article>
        </section>

        <section className="h-[calc(100vh-4rem)]" id="intership">
            <div className="md:container md:mx-auto">
                 <div className="text-center mb-4">
                    <h2 className="text-2xl font-bold">My experiences</h2>
                    <p className="text-lg">Those are my internship.</p>
                </div>
                <div className="flex flex-wrap justify-center text-center">

                    <div className="w-full md:w-1/2 p-4 ">
                        <div className="bg-gray-300 border-0 rounded-lg shadow-lg overflow-hidden" >
                            <img className="pt-5 mx-auto w-24 h-24" src="https://cha-xeo.github.io/PortfolioFiles/pmsm-m.webp"   alt="Pms Médicalisation"/>
                            <div className="p-4 text-center">
                                <h5 className="text-lg font-semibold">Pms Médicalisation</h5>
                                <p className="text-base">Full-stack web developer | August 2021 - December 2021</p>
                            </div>
                        </div>
                        <div className="bg-gray-100 border-0 rounded-lg shadow-lg overflow-hidden text-start justify-start" >
                            <p className='m-5'>
                                During this internship, I learned the basics of web development, including MVC, MVVM, and object-oriented programming. <br />
                                My tasks involved adding features to an existing in-house Enterprise Resource Planning (ERP) system. <br />
                                My final task was to streamline the recruitment process by creating systems that reduced the amount of communication needed between human resources and commercials. <br />
                                I developed a new user interface to consolidate everything in one place, and on the back-end,
                                I managed the flow of data to ensure the right information was sent to the appropriate parties at the right time.
                            </p>
                            <h3 className='m-5'>Language and framework used:</h3>
                            <div className="mr-7 mt-2 ml-7 m-5 flex-grow flex items-start ">
                                <ul className="flex flex-col items-start space-y-1 text-base">
                                    <li>
                                        <a href="https://www.sencha.com/products/extjs/" className="flex items-center space-x-2 hover:text-gold transition-colors">
                                            <span>Javascript ExtJs version 3 and 6</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.php.net/" className="flex items-center space-x-2 hover:text-gold transition-colors">
                                            <span>PHP Zend</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.mysql.com/" className="flex items-center space-x-2 hover:text-gold transition-colors">
                                            <span>MYSQL</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <div className="bg-gray-300 border-0 rounded-lg shadow-lg overflow-hidden" >
                            <img className="pt-5 mx-auto w-24 h-24" src="https://cha-xeo.github.io/PortfolioFiles/winlink.png"  alt="Winlink systems"/>
                            <div className="p-4 text-center">
                                <h5 className="text-lg font-semibold">Winlink systems</h5>
                                <p className="text-base">Full-stack web developer | March 2024 - September 2024</p>
                            </div>
                        </div>
                        <div className="bg-gray-100 border-0 rounded-lg shadow-lg overflow-hidden text-start justify-start" >
                            <p className='m-5'>
                                During this internship, I worked on web development and learned about customer support. <br />
                                My tasks included adding features to Winlink's 'MDA' solution, which is an Enterprise Resource Planning (ERP) system. <br />
                                I focused on implementing quality-of-life features while addressing customer demands. <br />
                                As I was responsible for customer support, I interacted directly with customers to understand their needs.
                            </p>
                            <h3 className='m-5'>Language and framework used:</h3>
                            <div className="mr-7 mt-2 ml-7 m-5 flex-grow flex items-start ">
                                <ul className="flex flex-col items-start space-y-1 text-base">
                                    <li>
                                        <a href="https://jquery.com/" className="flex items-center space-x-2 hover:text-gold transition-colors">
                                            <span>Javascript jquery</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twig.symfony.com/" className="flex items-center space-x-2 hover:text-gold transition-colors">
                                            <span>Symfony Twig</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.php.net/" className="flex items-center space-x-2 hover:text-gold transition-colors">
                                            <span>PHP</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://symfony.com/" className="flex items-center space-x-2 hover:text-gold transition-colors">
                                            <span>Symfony</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.mysql.com/" className="flex items-center space-x-2 hover:text-gold transition-colors">
                                            <span>MYSQL</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </div>
  );
}