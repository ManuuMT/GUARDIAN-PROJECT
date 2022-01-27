import React from "react";
import "./Features.scss";

const Features = () => {
    return (
      <>
        <div className="container px-4 py-5">
            
            <h2 className="pb-2 text-center">Columns with icons</h2>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="feature col">
                <div className="feature-icon bg-primary bg-gradient">
                    icon
                </div>
                <h2>Feature title</h2>
                <p>Lorem ipsum nosce persecula Lorem ipsum nosce persecula Lorem ipsum nosce persecula</p>
                <a href="">Link</a>
            </div>
            <div className="feature col">
                <div className="feature-icon bg-primary bg-gradient">
                    icon
                </div>
                <h2>Feature title</h2>
                <p>Lorem ipsum nosce persecula Lorem ipsum nosce persecula Lorem ipsum nosce persecula</p>
                <a href="">Link</a>
            </div>
            <div className="feature col">
                <div className="feature-icon bg-primary bg-gradient">
                    icon
                </div>
                <h2>Feature title</h2>
                <p>Lorem ipsum nosce persecula Lorem ipsum nosce persecula Lorem ipsum nosce persecula</p>
                <a href="">Link</a>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Features;