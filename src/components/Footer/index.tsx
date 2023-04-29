import Link from "next/link";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Footer = () => {
    return (
        <>
            <footer>
                <div className="container container-pad rel">
                    <div className=" footer-title">
                        <div className="footer-line"></div>
                        <div className="title">
                            <h6>HomeComfort India</h6>
                        </div>
                    </div>
                    <div className='flex justify-center social-links'>
                        <p>Follow us :</p>
                        <Link href='/'><LinkedInIcon/></Link>
                        <Link href='/'><FacebookIcon/></Link>
                        <Link href='/'><InstagramIcon/></Link>
                    </div>
                    <div className="footer-details">
                        <p>Copyright @ 2023 | HomeComfort India</p>
                    </div>
                    <span className="credits">Image credits: <a href='https://www.freepik.com/'>freepik</a></span>
                </div>
            </footer>
            <style jsx>{`
            footer {
                width: 100%;
                background-color: #4c524d;
                color: #fff ;
            }

            .footer-title {
                position: relative;
            }

            .title {
                position: absolute;
                padding-left: 32px;
                padding-right: 32px;
                background-color: #4c524d;
                left: 50%;
                bottom: 50%;
                transform: translate(-50%, 49%);
                
            }

            .title h6 {
                font-size: 24px;
            }

            .footer-title .footer-line {
                height: 1px;
                width: 100%;
                display: block;
                background-color: #fff;
            }   

            .footer-details {
                text-align: center;
                margin-top: 12px;
            }

            .credits {
                font-size: 6px;
                color: #fff;
                position: absolute;
                right: 0;
                bottom: 0;
            }

            .credits a {
                text-decoration: none;
                color: #fff;
            }

            .social-links {
                margin-top: 42px;
                font-size: 16px;
            }            

            @media only screen and (max-width:500px) {
                .title h6 {
                    font-size: 16px;
                }

                .title {
                    padding: 0;
                    width: 55%;
                    text-align: center;
                }                
            }

            @media only screen and (max-width:767px) {
                .title h6 {
                    font-size: 16px;
                }

                .footer-details p {
                    font-size: 12px;
                }
            }
            
            
        `}</style>
        </>
    )
}