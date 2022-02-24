import React from "react";
import PropTypes from "prop-types";
import "./FeatureItem.scss";


const FeatureItem = (prop) => {
    return (
      <>
            <div className="col-lg-4 text-center">
                <div className="container square-feature pb-4">
                  <i className="py-4"><span>{prop.icon}</span></i>
                  <h4 className="py-4">{prop.title}</h4>
                  <p>{prop.text}</p>
                </div>
            </div>
      </>
    );
  };
  
 FeatureItem.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
  };

  export default FeatureItem;