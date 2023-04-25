import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export const Navigation = () => {
    const [showCloseIcon, setShowCloseIcon] = useState(false)
    const router = useRouter()
    const navRef = useRef() as React.RefObject<HTMLDivElement>
    const mobContainerRef = useRef() as React.RefObject<HTMLDivElement>


    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                navRef?.current?.classList.add('navigation-container')
            } else {
                navRef?.current?.classList.remove('navigation-container')
            }
        })
    }, [])

    const showMobMenuFunc = () => {
        setShowCloseIcon(true)
        mobContainerRef?.current?.classList.add('show-mob-menu')
    }

    const closeMobMenu = () => {
        setShowCloseIcon(false)
        mobContainerRef?.current?.classList.remove('show-mob-menu')

    }

    return (
        <>
            <div className="home-page-nav " ref={navRef}>
                <div className='container'>
                    <div className="nav-container">
                        <div className="logo-container">
                        <Image src='/logo.jpeg' alt='logo'  fill style={{ objectFit: 'cover' }}/>
                        </div>
                        <ul className="nav-list">
                            <li><Link href='/' className={`nav-link ${router.pathname === '/' ? 'active-link' : ''}`}>Home</Link></li>
                            <li><Link href='/repair-services' className={`nav-link ${router.pathname === '/repair-services' ? 'active-link' : ''}`}>Repair Services</Link></li>
                            <li><Link href='/about' className={`nav-link ${router.pathname === '/about' ? 'active-link' : ''}`}>About</Link></li>
                       {/*      <li><Link href='/contact' className={`nav-link ${router.pathname === '/contact' ? 'active-link' : ''}`}>Contact</Link></li> */}
                        </ul>
                        <span className="ham" onClick={showMobMenuFunc}></span>
                        <div className="mob-menu" ref={mobContainerRef}>
                            <span onClick={closeMobMenu} className='close'>&#10005;</span>
                            <ul className="mob-nav-list">
                                <li onClick={closeMobMenu}><Link href='/' className={`mob-nav-link`}>Home</Link></li>
                                <li onClick={closeMobMenu}><Link href='/repair-services' className={`mob-nav-link`}>Repair Services</Link></li>
                                <li onClick={closeMobMenu}><Link href='/about' className={`mob-nav-link `}>About</Link></li>
                             {/*    <li onClick={closeMobMenu}><Link href='/contact' className={`mob-nav-link`}>Contact</Link></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`

                .home-page-nav {
                    background-color: #fff;
                    z-index: 10;
                    transition: all 0.3s ease;
                    height: 80px;                    
                    width: 100%;
                    position: relative
                }

                .navigation-container {                
                    box-shadow: 0 1px 16px #777c8833;                                                        
                    transition: all 0.3s ease;                   
                    position: fixed;
                    top: 0;
                    left: 0;                   
                }
                
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

                .ham {
                    position: relative;
                    width: 30px;
                    height: 2px;
                    background-color: #000;
                }

                .ham::before {
                    position: absolute;
                    content: '';
                    bottom: 8px;
                    width: 30px;
                    left: 0px;
                    height: 2px;
                    background-color: #000;
                }

                .ham::after {
                    position: absolute;
                    content: '';
                    bottom: -8px;
                    width: 30px;
                    left: 0px;
                    height: 2px;
                    background-color: #000;
                }

                .mob-menu {
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;                
                    height: 100vh;
                    background-color: #fff;
                    transform: translateY(-100%);
                    transition: all 0.5s ease;
                    padding: 64px 32px;
                }

                .mob-nav-list li {
                    list-style-type: none;
                    text-align: center;
                }
                
                .close {
                    font-size: 32px;
                    position: absolute;
                    right: 16px;
                    top: 16px;
                    font-weight: 700;
                }

                .show-mob-menu {
                    transform: translateY(0%);                  
                }

                @media only screen and (max-width: 767px) {
                    .nav-list {
                        display: none;
                    }
                }

                @media only screen and (min-width: 768px) {
                    .mob-menu {
                        display: none;
                    }

                    .ham {
                        display: none;
                    }
                }
            `}
            </style>
        </>

    )
}