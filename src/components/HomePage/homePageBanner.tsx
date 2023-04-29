import Link from 'next/link';
import Image from 'next/image';

export const HomePageBanner = () => {
    return (
        <div className='home-page' >
            <div className='home-page-details'>
                <div className='home-page-details-box'>
                    <h1>MAKE YOUR ROOM COMFORTABLE IN ALL SEASONS</h1>
                    <p>Good air conditioning can greatly improve your comfort and health. You can book Air Condition repair services online and offline in Hyderabad, TS, India. You can book on our official website, send an email to support@homecomfortindia.in, or call us at +91-7013214180/+91-8978372392</p>
                    <Link href='/repair-services' className='nav-link home-nav-link'>Book Repair Service</Link>
                </div>
            </div>
            <div className='home-page-banner'>
                <Image src='/20944212.jpg' fill style={{ objectFit: 'cover' }} alt='home-img' sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" priority={true}/>
            </div>
        </div>
    )
}