import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link'


export default function Page() {
const t = useTranslations('About');
  return (
    <div className="relative" >
        <section className='h-[calc(100vh-4rem)]' id="aboutme">
            <article className='py-10'>
                <div className="md:container md:mx-auto">
                    <h2 className='text-center py-5'>{t('aboutme.me.title')}</h2> <br />
                    <p className='clear-left'>{t.rich('aboutme.me.text', {
                        br: () => <br />
                    })}</p>
                </div>
            </article>
            <article className="bg-gray-100 py-24 pb-24">
                <div className="md:container md:mx-auto">
                    <div className="text-center mb-4">
                        <h2 className="text-2xl font-bold">{t('aboutme.hobbies.title')}</h2>
                        <p className="text-lg">{t('aboutme.hobbies.subtitle')}</p>
                    </div>
                    <div className="flex flex-wrap mx-4">

                        <div className=" w-full md:w-1/3 px-4">
                            <div className="min-h-64 bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="p-6">
                                    <h5 className="text-center text-xl font-semibold mb-4">{t('aboutme.hobbies.games.title')}</h5>
                                    <p className="text-gray-600 mb-4">{t('aboutme.hobbies.games.text')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-4">
                            <div className="min-h-64 bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="p-6">
                                    <h5 className="text-center text-xl font-semibold mb-4">{t('aboutme.hobbies.books.title')}</h5>
                                    <p className="text-gray-600 mb-4">{t('aboutme.hobbies.books.text')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-4">
                            <div className="min-h-64 bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="p-6">
                                    <h5 className="text-center text-xl font-semibold mb-4">{t('aboutme.hobbies.travels.title')}</h5>
                                    <p className="text-gray-600 mb-4">{t('aboutme.hobbies.travels.text')}</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </article>
        </section>

        <section className="h-[calc(100vh-4rem)]" id="exp">
            <div className="md:container md:mx-auto">
                 <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold">{t('exp.title')}</h2>
                    {/* <p className="text-lg">{t('exp.subtitle')}</p> */}
                </div>
                <div className="flex flex-wrap justify-center text-center">

                    <div className="w-full md:w-1/2 p-4 ">
                        <div className="bg-gray-300 border-0 rounded-lg shadow-lg overflow-hidden" >
                            <Image
                            className="pt-5 mx-auto w-24 h-24"
                            src="https://cha-xeo.github.io/PortfolioFiles/pmsm-m.webp"
                            width={150}
                            height={150}
                            alt="Pms Médicalisation"/>
                            <div className="p-4 text-center">
                                <h5 className="text-lg font-semibold">Pms Médicalisation</h5>
                                <p className="text-base">{t('exp.pmsm.title')}</p>
                            </div>
                        </div>
                        <div className="bg-gray-100 border-0 rounded-lg shadow-lg overflow-hidden text-start justify-start" >
                            <p className='m-5'>{t.rich('exp.pmsm.description',
                                { br: () => <br /> }
                            )}</p>
                            <h3 className='m-5'>{t('exp.pmsm.techno_title')}</h3>
                            <div className="mr-7 mt-2 ml-7 m-5 flex-grow flex items-start ">
                                <ul className="flex flex-col items-start space-y-1 text-base">
                                    <li>
                                        <a href="https://www.sencha.com/products/extjs/" className="flex items-center space-x-2 hover:text-gold transition-colors">
                                            <span>{t('exp.pmsm.techno.ext')}</span>
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
                            <Image
                            className="pt-5 mx-auto w-24 h-24"
                            src="https://cha-xeo.github.io/PortfolioFiles/winlink.png"
                            width={150}
                            height={150}
                            alt="Winlink systems"/>
                            <div className="p-4 text-center">
                                <h5 className="text-lg font-semibold">Winlink systems</h5>
                                <p className="text-base">{t('exp.winlink.title')}</p>
                            </div>
                        </div>
                        <div className="bg-gray-100 border-0 rounded-lg shadow-lg overflow-hidden text-start justify-start" >
                            <p className='m-5'>{t.rich('exp.winlink.description', { br: () => <br /> })}</p>
                            <h3 className='m-5'>{t('exp.winlink.techno_title')}</h3>
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