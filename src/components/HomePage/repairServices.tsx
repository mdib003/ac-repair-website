export const RepairServices = () => {
    return (
        <>
            <div className="container">
                <div className="cards-box">
                    <div className="card">
                        <div className="card-img-box">
                            <div className="card-img" style={{ backgroundImage: `url(/ac.png)` }}></div>
                        </div>
                        <h4>AC</h4>
                    </div>
                    <div className="card">
                        <div className="card-img-box">
                            <div className="card-img" style={{ backgroundImage: `url(/air-cooler.png)` }}></div>
                        </div>
                        <h4>Air Cooler</h4>
                    </div>
                    <div className="card">
                        <div className="card-img-box">
                            <div className="card-img" style={{ backgroundImage: `url(/FRIDGE.png)` }}></div>
                        </div>
                        <h4>Fridge</h4>
                    </div>
                    <div className="card">
                        <div className="card-img-box">
                            <div className="card-img" style={{ backgroundImage: `url(/deep-fridge.png)` }}></div>
                        </div>
                        <h4>Deep Fridge</h4>
                    </div>
                    <div className="card">
                        <div className="card-img-box">
                            <div className="card-img" style={{ backgroundImage: `url(/water-cooler.png)` }}></div>
                        </div>
                        <h4>Water Cooler</h4>
                    </div>
                    <div className="card">
                        <div className="card-img-box">
                            <div className="card-img" style={{ backgroundImage: `url(/WASHING-MACHINE.png)` }}></div>
                        </div>
                        <h4>Washing Machine</h4>
                    </div>
                </div>
            </div>
            <style jsx>{`
            .cards-box {
                display: flex;
                flex-wrap: wrap;
                gap: 16px;
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
                background-color: #626769;
                margin-right: 24px;
            }

            .card-img {
                background-position: center;
                background-size: cover;
                width: 100%;
                height: 100%;
            }

            .card {
                width: 24%;
                height: auto;
                padding: 16px;
                border-radius: 12px;
                box-shadow: 0 0 20px rgba(52, 69, 113, 0.16);
            }

            @media only screen and (max-width:767px) {
                .card {
                    width: 47%;
                }
                .card-img-box {
                    width: 40px !important;
                    height: 40px !important;
                }   

                h4 {
                    font-size: 12px
                }
            }

            @media only screen and (min-width:768px) and (max-width:1023px) {
                .card {
                    width: 31.9%;
                }
            }
        `}</style>
        </>
    )
}