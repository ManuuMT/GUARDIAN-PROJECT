import React from "react";
import "./Process.scss";

import ProcessIcon from "./ProcessIcon/ProcessIcon.jsx";

const Process = () => {
    return (

        <>
            <div className="container px-4 py-5 text-white">
                <h2 className="pb-2 text-center">Guardian Process</h2>
                <div className="d-flex justify-content-between">
                    <ProcessIcon />
                    <ProcessIcon />
                    <ProcessIcon />
                    <ProcessIcon />
                    <ProcessIcon />
                </div>
            </div>

        </>

    );
};
    
export default Process;