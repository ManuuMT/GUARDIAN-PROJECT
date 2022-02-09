import React from "react";
import PropTypes from "prop-types";
import "./FeatureItem.scss";
import propTypes from "prop-types";

const FeatureItem = (prop) => {
    return (
      <>
            <div className="col-lg-4 text-center">
                <div className="container square-feature pb-4">
                  <div className="pt-5">icon</div>
                  <h2 className="p-3">{prop.title}</h2>
                  <p>{prop.text}</p>
                </div>
            </div>
      </>
    );
  };
  
 FeatureItem.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string
  };

  export default FeatureItem;