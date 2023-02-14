import React from "react";

function Ingredients() {
    const ingredients = [
        {
            name: "unflavored gelatin",
            quantity: "2 envelopes"
        },
        {
            name: "sugar",
            quantity: "1/2 cup"
        },
        {
            name: "salt",
            quantity: "1 teaspoon"
        },
        {
            name: "apple juice",
            quantity: "1 can (12 oz)"
        },
        {
            name: " lemon juice",
            quantity: "1/2 cup"
        },
        {
            name: "vinegar",
            quantity: "2 tablespoons"
        },
        {
            name: "shredded carrot",
            quantity: "1 cup"
        },
        {
            name: "sliced celery",
            quantity: "1 cup"
        },
        {
            name: "finely shredded cabbage",
            quantity: "1 cup"
        },
        {
            name: "chopped green pepper",
            quantity: "1/2 cup"
        },
        {
            name: "chopped pimiento",
            quantity: "1 can (4 oz)"
        }
    ]
    const ingredientsList = ingredients.map(ingredient => <li key={ingredient.name} className="ingredients"><em><strong>{ingredient.quantity}</strong></em>  -  {ingredient.name}</li>);
    return (
        <div>
            <h2>
                Ingredients
            </h2>

            <ul>{ingredientsList}</ul>

        </div>
    );
}
export default Ingredients;