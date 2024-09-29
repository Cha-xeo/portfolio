import { useTranslations } from 'next-intl';
import Link from 'next/link'


export default function Page() {
  const t = useTranslations('experience')
  return (
    <div className="h-screen flex flex-row items-center justify-center" style={{backgroundColor: '#000'}}>
        <h1 className='next-error-h1 font-bold text-xl text-wit'>404 |&nbsp;</h1>
        <div className='inline-block'>
            <h2 className='font-extralight text-lg text-wit'>{t('title')}</h2>
        </div> 
    </div>
  );
}