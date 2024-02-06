import React from 'react';
import {Base64} from 'js-base64';
import {useParams} from "react-router-dom";

const Csfr = () => {
    const {link} = useParams();
    const srcForImage = Base64.decode(link);
    console.log(srcForImage);
    return (
        <div>
            <h1>csfr</h1>
            <img src={srcForImage} />
        </div>
    );
};

export default Csfr;
