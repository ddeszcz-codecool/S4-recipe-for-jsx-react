import React from "react";
import Bolder from "./Bolder";
import Alligner from "./Alligner";

function Preparation() {


    const servingSize = "Makes 8 servings.";
    const preparation = [
        {
            instruction: "In small saucepan, combine gelatine, sugar, and salt; mix well.",
        },
        {
            instruction: `Add 1 cup water. Heat over low heat, stirring constantly, until sugar and gelatine are dissolved. Remove from heat.`,
        },
        {
            instruction: `Stir in apple juice, lemon juice, vinegar, and 1/4 cup cold water. Pour into medium bowl. Refrigerate 1 hour, or until mixture is consistency of unbeaten egg white.`,
        },
        {
            instruction: `Add carrot, celery, cabbage, green pepper, and pimiento; stir until well combined.`,
        },
        {
            instruction: `Turn into decorative, 1 1/2-quart mold. Refrigerate 4 hours,or until firm.`,
        },
        {
            instruction: `To unmold: Run small spatula around edge of mold; invert onto serving plate. Place hot dishcloth over mold; shake gently to release. Repeat, if necessary. Lift off mold. refrigerate until ready to serve.`,
        }
    ]
    const preparationList = preparation.map(step =>
        <li key={step.instruction} className="preparation">{Bolder(Alligner(step.instruction))}</li>);
    return (
        <div>
            <h2>
                Preparation
            </h2>

            <ol>{preparationList}</ol>

            <p className="serving">{servingSize}</p>
            <br/>


        </div>
    );
}

export default Preparation