import Link from 'next/link'


export default function Page() {
  return (
    <>
        <section className="py-5">
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2">
                    <h2>My years at Epitech</h2>
                                    <p>I started my journey as a developer in 2020 when I joined Epitech.</p>
                                    <p>The first years were challenging as Epitech uses a project-based curriculum. 
                                        It allowed me to learn how to learn, work in groups, and work independently. 
                                        I also had the opportunity to spend a year in South Korea at Keimyung University.</p>
                                    <p>Keimyung offers many programs, and I was enrolled in a video game creation program. 
                                        Some of those projects are available to play on this site in the Games section.</p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img src="https://cha-xeo.github.io/PortfolioFiles/me.png" className="rounded-full w-36 h-36 " alt="Me" />
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-gray-100 py-5">
            <div className="container mx-auto">
                <div className="text-center mb-4">
                    <h2 className="text-2xl font-bold">My Hobbies</h2>
                    <p className="text-lg">Some of the things I like.</p>
                </div>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/3 px-4">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="p-6">
                                <h5 className="text-xl font-semibold mb-4">Video games</h5>
                                <p className="text-gray-600 mb-4">I have always played video games. My first video game ever was kingdom hearts II and since then I loved video games.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-4">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="p-6">
                                <h5 className="text-xl font-semibold mb-4">Books</h5>
                                <p className="text-gray-600 mb-4">Since I am a child I always loved fantasy novel and mangas.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-4">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="p-6">
                                <h5 className="text-xl font-semibold mb-4">Travels</h5>
                                <p className="text-gray-600 mb-4">I had the opportunity to spend a year in South Korea and since then I am planning to visit new places.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-5">
            <div className="container mx-auto">
                 <div className="text-center mb-4">
                    <h2 className="text-2xl font-bold">My experiences</h2>
                    <p className="text-lg">Those are my internship.</p>
                </div>
                <div className="flex flex-wrap justify-center text-center">
                <div className="w-full md:w-1/2 p-4">
                    <div className="bg-white border-0 shadow-sm" style={{width: '30rem'}}>
                    <img src="https://cha-xeo.github.io/PortfolioFiles/pmsm-m.webp" style={{height: '150px'}}  className="w-full" alt="Pms Médicalisation"/>
                    <div className="p-4 text-center">
                        <h5 className="text-lg font-semibold">Pms Médicalisation</h5>
                        <p className="text-base">Full-stack web developer | August 2021 - December 2021</p>
                    </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-4">
                    <div className="bg-white border-0 shadow-sm" style={{width: '30rem'}}>
                    <img src="https://cha-xeo.github.io/PortfolioFiles/winlink.gif" style={{height: '150px'}} className="w-full" alt="Winlink systems"/>
                    <div className="p-4 text-center">
                        <h5 className="text-lg font-semibold">Winlink systems</h5>
                        <p className="text-base">Full-stack web developer | March 2024 - September 2024</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  );
}