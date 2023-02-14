import React from 'react';

const Alligner = (str) => {
    const replaceRegEx = /\. /gi;
    const replaceWith = ".<br />";
    if (str === null) {
        return "";
    } else {
        return str.replace(replaceRegEx, replaceWith);
    }
}
export default Alligner;