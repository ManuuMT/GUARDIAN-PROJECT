import React from "react";
import "./Testimonials.scss";

import TestItem from "./TestItem/TestItem.jsx"

const Testimonials = () => {
    return (

        <>
            <div className="container px-4 py-5 text-white">
                <h2 className="pb-2 text-center">Testimonials</h2>
                <div className="row">
                    <TestItem />
                    <TestItem />
                    <TestItem />
                </div>
            </div>
        </>

    );
};
    
export default Testimonials;