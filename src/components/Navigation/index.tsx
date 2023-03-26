import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export const Navigation = () => {
    const router = useRouter()

    console.log('useRouter', router)
    return (
        <>
            <div>
                <div className='container'>
                    <div className="nav-container">
                        <h2>Logo</h2>
                        <ul className="nav-list">
                            <li><Link href='/' className={`nav-link ${router.pathname === '/' ? 'active-link' : ''}`}>Home</Link></li>
                            <li><Link href='/repair-services' className={`nav-link ${router.pathname === '/repair-services' ? 'active-link' : ''}`}>Repair Services</Link></li>
                            <li><Link href='/about' className={`nav-link ${router.pathname === '/about' ? 'active-link' : ''}`}>About</Link></li>
                            <li><Link href='/contact' className={`nav-link ${router.pathname === '/contact' ? 'active-link' : ''}`}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .nav-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 80px;
                }

                .nav-list {
                    display: flex;                    
                }

                .nav-list li {
                    list-style-type: none;
                }

                @media only screen and (max-width: 767px) {
                    .nav-list {
                        display: none;
                    }
                }
            `}
            </style>
        </>

    )
}