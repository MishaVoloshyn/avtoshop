import React from 'react';
import mileageIcon from '../../src/assets/image/car-list-icons/mileage-icon.svg';
import petrolIcon from '../../src/assets/image/car-list-icons/petrol-icon.svg';
import typeIcon from '../../src/assets/image/car-list-icons/type-icon.svg';


export function CarCardPattern() {
    return (
        <div className="col-12 col-md-6 col-lg-3">
            <div className="card border-16">

                <div className="position-relative">
                    <img src="https://automoto.ua/uploads/auto/Rimac%20Nevera.jpg" className="card-img-top" alt="Car" />
                    <span className="badge bg-green-1 text-white position-absolute py-2 dm-sans-medium ft-15 border-30" style={{ top: '15px', left: '10px' }}>Great Price</span>
                </div>
                <div className="card-body">
                    <h5 className="card-title ft-18 mb-0 dm-sans-medium">Toyota Camry New</h5>
                    <p className="ft-15 border-bottom dm-sans-regular">
                        3.5 D5 PowerPulse Momentum 5dr AW…
                    </p>
                    <div className="row justify-content-center">
                        <div className="col-4 text-center">
                            <img src={mileageIcon} alt="Mileage Icon" className="fs-2" />
                            <p className="ft-15">20 Miles</p>
                        </div>

                        <div className="col-4 text-center">
                            <img src={petrolIcon} alt="Mileage Icon" className="fs-2" />
                            <p className="ft-15">Petrol</p>
                        </div>

                        <div className="col-4 text-center">
                            <img src={typeIcon} alt="Mileage Icon" className="fs-2" />
                            <p className="ft-15">Automatic</p>
                        </div>
                        <div className="col-11 border-bottom"></div>

                    </div>

                    <div className="row pt-3">
                        <div className="col-6">
                            <h4 className="dm-sans-bold">$40,000</h4>
                        </div>
                        <div className="col-6 text-end">
                            <p className="ft-15 blue-color dm-sans-medium">View Details <i className="bi bi-arrow-up-right"></i></p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
