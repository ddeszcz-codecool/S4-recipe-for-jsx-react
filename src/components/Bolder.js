import React from 'react';

const Bolder = (str) => {
    var boldedText = "example";
    const wordsToBold = [
        'gelatine', 'sugar', 'salt', 'apple juice', 'lemon juice', 'vinegar', 'carrot', 'celery', 'cabbage', 'green pepper', 'pimiento', 'water'
    ];
    if (str.length > 3) {
        boldedText = str;
    } else {
        return str;
    }
    for (let boldWord of wordsToBold) {
        boldedText = boldedText.replace(boldWord, `<strong>${boldWord}</strong>`);
    }
    return (
        <p dangerouslySetInnerHTML={{__html: boldedText}}/>);
}
export default Bolder;