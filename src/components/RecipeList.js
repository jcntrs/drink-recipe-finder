import React, { useContext } from 'react';
import { RecipesContext } from '../context/RecipesContext';

const RecipeList = () => {

    const { recipes } = useContext(RecipesContext);

    return (
        <div className="row mt-5">
            {recipes.map(element =>
                <div className="col-md-4 mb-3" key={element.idDrink}>
                    <div className="card">
                        <h2 className="card-header"><strong>{element.strDrink}</strong></h2>
                        <img className="card-img-top" src={element.strDrinkThumb} alt={`Omagen de ${element.strDrink}`} />
                        <div className="card-body">
                            <button className="btn btn-block btn-outline-warning"><strong>Ver Receta</strong></button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default RecipeList;