import React from "react";
import worker1 from '../assets/image/team2/worker1.png';
import worker2 from '../assets/image/team2/worker2.png';
import worker3 from '../assets/image/team2/worker3.png';
import worker4 from '../assets/image/team2/worker4.png';

export function Team() {
    return (
        <div className="containter p-5">
            <div className="row">
                <div className="col-6">
                    <p className="dm-sans-bold text-start h2">Our Team</p>
                </div>
                <div className="col-6">
                    <p className="dm-sans text-end"><a className="dm-sans text-end text-decoration-none">View All <i className="bi bi-arrow-up-right"></i> </a></p>
                </div>
            </div>


            <div className="row">


                <div className="col-6 col-lg-3 ">
                    <img src={worker1}/>
                    <p className="dm-sans-medium ft-20">Courtney Henry</p>
                    <p className="dm-sans-regular ft-14">Development Manager</p>
                </div>


                <div className="col-6 col-lg-3 ">
                    <img src={worker2}/>
                    <p className="dm-sans-medium ft-20">Jerome Bell</p>
                    <p className="dm-sans-regular ft-14">Software Tester</p>
                </div>


                <div className="col-6 col-lg-3 ">
                    <img src={worker3}/>
                    <p className="dm-sans-medium ft-20">Arlene McCoy</p>
                    <p className="dm-sans-regular ft-14">Software Developer</p>
                </div>


                <div className="col-6 col-lg-3">
                    <img src={worker4}/>
                    <p className="dm-sans-medium ft-20">Jenny Wilson</p>
                    <p className="dm-sans-regular ft-14">UI/UX Designer</p>
                </div>
            </div>
        </div>
    );
}