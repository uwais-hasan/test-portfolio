import React from 'react';
import {NavLink} from "react-router-dom";

const Links = ({name,href,icons}) => {
    return (
        <NavLink className='text-decoration' to={`/${href==='Home'?'':href}`}>{icons}{name}</NavLink>
    );
};

export default Links;