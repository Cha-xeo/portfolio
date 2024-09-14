import Link from 'next/link'


export default function Page() {
  return (
    <div className="h-screen flex flex-row items-center justify-center" style={{backgroundColor: '#000'}}>
        <h1 className='next-error-h1 font-bold text-xl text-wit'>404 |&nbsp;</h1>
        <div className='inline-block'>
            <h2 className='font-extralight text-lg text-wit'>5 years working experience not found</h2>
        </div> 
    </div>
  );
}