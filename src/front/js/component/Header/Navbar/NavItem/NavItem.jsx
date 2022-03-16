import React from "react";
import PropTypes from "prop-types";

const NavItem = prop => {
	return (
		<li className="nav-item active">
            <div className="nav-link">{prop.title}</div>
        </li>
	);
};

NavItem.propTypes = {
	title: PropTypes.string
};

export default NavItem;