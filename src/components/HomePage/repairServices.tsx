import Link from "next/link"

const cardsData = [
    {
        title: 'AC',
        img: '/ac.png'
    },
    {
        title: 'Air Cooler',
        img: '/air-cooler.png'
    },
    {
        title: 'Fridge',
        img: '/FRIDGE.png'
    },
    {
        title: 'Deep Fridge',
        img: '/deep-fridge.png'
    },
    {
        title: 'Water Cooler',
        img: '/water-cooler.png'
    },
    {
        title: 'Washing Machine',
        img: '/WASHING-MACHINE.png'
    },
]

export const RepairServices = () => {
    return (
        <>
            <div className="container container-pad">
                <h2>Our Services</h2>
                <div className="cards-box">
                    {
                        cardsData.map((c) => {
                            return (
                                <Link href='/'>
                                <div className="card">
                                    <div className="card-img-box">
                                        <div className="card-img" style={{ backgroundImage: `url(${c.img})` }}></div>
                                    </div>
                                    <h4>{c.title}</h4>
                                </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            <style jsx>{`
            .cards-box {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 16px;
            }

            h2 {
                font-size: 28px;
                margin-bottom: 24px;
                text-align: center;
                color: #626769;
            }

            .card {
                display: flex;
                align-items: center;
            }

            .card-img-box {
                width: 80px;
                height: 80px;
                border-radius: 100%;
                overflow: hidden;
                background-color: #d5d6de;
                margin-right: 24px;
            }

            .card-img {
                background-position: center;
                background-size: cover;
                width: 100%;
                height: 100%;
            }

            .card {
                width: 100%;
                height: auto;
                padding: 16px;
                border-radius: 12px;
                box-shadow: 0 0 20px rgba(52, 69, 113, 0.16);
            }

            @media only screen and (max-width:767px) {
              
            }

            @media only screen and (min-width:768px) and (max-width:1023px) {
               
            }
        `}</style>
        </>
    )
}