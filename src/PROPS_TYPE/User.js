import React from 'react';
import PropTypes from "prop-types";

//rafcp keyboard shortcut


const User = (props) => {
  return (
    <div>
        <h2>{props.user.name}</h2>
        <h2>{props.user.id}</h2>
    </div>
  )
};

// User.propTypes = {
//     userName: PropTypes.string,
//     userId: PropTypes.number,
// }

// User.defaultProps = {
//     userName: "default name",
//     id: 0,
// }

User.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.number,
    })
};



export default User;