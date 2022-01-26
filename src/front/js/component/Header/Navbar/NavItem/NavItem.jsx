import React from "react";
import PropTypes from "prop-types";

const NavItem = prop => {
	return (
		<li className="nav-item active">
            <a className="nav-link">{prop.title}</a>
        </li>
	);
};

NavItem.propTypes = {
	title: PropTypes.string
};

export default NavItem;