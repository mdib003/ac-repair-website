import React, { useEffect, useRef } from "react";
import Image from "next/image";

export const AboutComponent = () => {
    const textRef = useRef() as React.MutableRefObject<HTMLParagraphElement>
    const textRef2 = useRef() as React.MutableRefObject<HTMLParagraphElement>
    const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>
    const imageRef = useRef() as React.MutableRefObject<HTMLDivElement>
    const imageRef2 = useRef() as React.MutableRefObject<HTMLDivElement>



    useEffect(() => {
        if (imageRef2?.current) {
            
            let checkElementPosition = imageRef2?.current?.getBoundingClientRect().top < (window.innerHeight - 150) ? true : false
            if (checkElementPosition) {
                console.log('checkElementPosition', checkElementPosition)
                imageRef2?.current?.classList?.add('show-img')
            } /* else {
                imageRef2?.current?.classList?.remove('show-img')
            } */
        }

        if (textRef2?.current) {
            let checkElementPosition = textRef2?.current?.getBoundingClientRect().top < (window.innerHeight - 150) ? true : false
            if (checkElementPosition) {
                textRef2?.current?.classList?.add('translate-para')
            } /* else {
                textRef2?.current?.classList?.remove('translate-para')
            } */
        }

        if (textRef?.current) {
            textRef?.current?.classList?.add('translate-para')
        }

        if (imageRef?.current) {
            imageRef?.current?.classList?.add('show-img')
        }
    }, [])
    return (
        <>
            <div className="container container-pad" ref={containerRef}>
                <div className="flex about-section">
                    <div className="about-details" ref={textRef}>
                        <p className="about-para" ><span>At Homecomfort India,</span> we strive to spread comfort and customer satisfaction wherever we go. With an amazing team of experienced, local professionals, you can always count on us for top-notch service. </p>
                        <p className="about-para">  Need help with your AC, Refrigerator, Washing Machine, or Microwave, we’ll be glad to help, and we can offer assistance for a wide range of other home comfort needs while we’re at it.
                        </p>
                    </div>
                    <div className="about-img" ref={imageRef}>
                        <Image src='/happy-house-owner-lying-on-couch.jpg' alt='happy-house-owner-lying-on-couch' fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" priority={true}/>
                    </div>
                </div>
                <div className="flex about-section">
                    <div className="about-img2" ref={imageRef2}>
                        <Image src='/272.jpg' alt='fixing the ac' fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"/>
                    </div>
                    <div className="about-details2" ref={textRef2}>
                        <p className="about-para2"><span>You deserve Comfortable and Expert service, and with us, it’s right in the name.</span> We are Service Experts! Delivering comfort for our communities and making a difference in people’s lives.</p>
                        <p className="about-para2">
                            We believe the best ideas can come from anywhere and anyone, so our goal is to constantly reinvent the industry and look for the very best to join our team. Through it all, we’ll ensure the same high standard of quality you’ve come to expect.
                        </p>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .about-section {
                    width: 100%;
                    height: auto;
                    justify-content: center;
                    align-items: center;
                }

                .about-details {
                    width: 50%;
                    height: auto;
                    transition: all 0.5s ease;
                    transform: translateY(25px);
                    opacity: 0;
                }

                .about-details2 {
                    width: 50%;
                    height: auto;
                    transition: all 0.5s ease;
                    transform: translateY(25px);
                    opacity: 0;
                }

                .translate-para {
                    transform: translateY(0);
                    opacity: 1;
                }


                .about-img {
                    width: 50%;
                    height: auto;
                    opacity: 0;
                    transition: all 0.5s ease;
                    position: relative;
                }

                .about-img2 {
                    width: 50%;
                    height: auto;
                    opacity: 0;
                    transition: all 0.5s ease;
                    position: relative;
                }

                .show-img {
                    opacity: 1
                }

                .about-para {
                    font-size: 18px;
                    margin-bottom: 16px;
                    margin-right: 64px;
                  
                }

                .about-para2 {
                    font-size: 18px;
                    margin-bottom: 16px;
                    margin-left: 64px;
                }

                .about-para span, .about-para2 span {
                    font-size: 24px;
                    font-weight: 600;
                }

                @media only screen and (max-width: 767px) {
                    .about-section {
                        flex-direction: column;
                    }

                    .about-details, .about-details2 {
                        order: 1;
                    }

                    .about-details, .about-img, .about-img2, .about-details2 {
                        width: 100%;
                    }

                    .about-para {
                        margin-right: 0;
                    }

                    .about-para2 {
                        margin-left: 0;
                    }
                }
            `}</style>
        </>
    )
}
