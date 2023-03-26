import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from "swiper";
import "swiper/css";

const brandsImageList = ['/bluestar.png', '/bosch.png', '/carrier.png', '/daikin.png', '/godrej.png', '/lg.png', '/llyod.png',
    '/mitashi.png', '/onida.png', '/samsung.png', '/videocon.png', '/whirlpool.png']

export const BrandsList = () => {
    return (
        <>
        <div className='container container-pad'>
            <div className="brands-list-box">
                <h2>Brands We Provide Services</h2>
                <Swiper
                    spaceBetween={20}
                    autoplay={{
                        disableOnInteraction: true
                    }}
                    breakpoints={{                        
                        768: {                        
                          slidesPerView: 3,
                        },
                        1024: {
                            spaceBetween:40,
                            slidesPerView: 4,
                          },
                      }}
                     modules={[Autoplay]}
                    slidesPerView={1.4}
                    scrollbar={{ draggable: true }}
                >
                    {brandsImageList.map((img) => {
                        return (
                            <SwiperSlide>
                                <div className="brand-img">
                                    <Image src={img} alt='img' fill style={{ objectFit: 'cover' }} />
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
        <style jsx>
            {`
                .brands-list-box h2{
                    font-size: 28px;
                    margin-bottom: 24px;
                    text-align: center;
                    color: #626769;
                }
            `}
        </style>
        </>
    )
}