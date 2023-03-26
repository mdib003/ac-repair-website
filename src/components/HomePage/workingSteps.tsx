import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";

const stepsData = [
    {
        title: 'Step1 - Appointment',
        desc: 'Visit our website or give us a call to schedule an appointment.'
    },
    {
        title: 'Step2 - Evaluation',
        desc: 'Our AC technician will perform a 21 point inspection to determine your AC needs.'
    },
    {
        title: 'Step3 - Installation • Service • Repair',
        desc: 'Our A/C technician will provide you a detailed scope of work'
    },
    {
        title: 'Step4 - Warranty',
        desc: 'We guarantee our work and offer service contracts to extend your A/C life span.'
    },
    {
        title: 'Step5 - Job Completed',
        desc: 'Your satisfaction is our guarantee. Our core business is our reputation. Please take a moment to leave us your best review and mention our great work to your family and friends.'
    },
]

export const WorkingSteps = () => {
    return (
        <>
            <div className="working-steps-container container-mar">
                <div className="container steps-container">
                    <h2>How We Work</h2>
                    <Swiper                        
                        spaceBetween={20}
                        autoplay={{
                            disableOnInteraction: true
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2.5,
                            },
                            1024: {
                                spaceBetween: 40,
                                slidesPerView: 3.2,                               
                            },
                        }}
                        modules={[Navigation]}
                        slidesPerView={1.4}
                        scrollbar={{ draggable: true }}
                        className='steps-swiper'
                    >
                        {stepsData.map((d) => {
                            return (
                                <SwiperSlide key={d.title} className='steps-swiper-slide'>
                                    <div className="steps-box" >
                                        <h3>{d.title}</h3>
                                        <p>{d.desc}</p>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
            <style jsx>{`
            .steps-box {
                padding: 16px;
                color: #fff;
                background-color: #4287f5;
                transition: all 0.3s ease;
                height: 100%;
                transform: scale(1);
                border: 1px solid #fff;
                border-radius: 6px;
            }

            .steps-box:hover {
                background-color: #fff;
                color: #4287f5;
                transition: all 0.3s ease;
                transform: scale(1.06)
            }   
            
            .steps-box p{
                margin-top: 12px;
                font-size: 16px
            }

            .steps-container {
                padding-top: 24px;
            }

            .steps-container  h2{
                font-size: 28px;
                margin-top: 24px;             
                text-align: center;
                color: var(--white);
              }

          
        `}</style>
        </>
    )
}