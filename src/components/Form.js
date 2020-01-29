import React, { useContext, useState } from 'react';
import { CategoriesContext } from '../context/CategoriesContext';
import { RecipesContext } from '../context/RecipesContext';
import Error from './Error';

const Form = () => {

    const { categories } = useContext(CategoriesContext);
    const { setSearchRecipes, setConsult } = useContext(RecipesContext);

    const [error, setError] = useState(false);
    const [search, setSearch] = useState({
        ingredient: '',
        category: ''
    });

    const getFormData = event => {
        setSearch({
            ...search,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (search.ingredient.trim() === '' || search.category.trim() === '') {
            setError(true);
        } else {
            setError(false);
            setSearchRecipes(search);
            setConsult(true);
        }
    }

    return (
        <form className="col-12" onSubmit={handleSubmit}>
            <fieldset className="text-center">
                <legend>Busca por Categoría o Ingredientes</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input className="form-control" name="ingredient" type="text" placeholder="Buscar por ingrediente" onChange={getFormData} />
                </div>
                <div className="col-md-4">
                    <select className="form-control" name="category" onChange={getFormData}>
                        <option value="">Busca por categoría</option>
                        {categories.map(element => (
                            <option key={element.strCategory} value={element.strCategory}>{element.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input className="btn btn-block btn-primary" type="submit" value="Buscar recetas" />
                </div>
            </div>
            {error ? <Error message="Todos los campos son obligatorios."></Error> : null}
        </form>
    );

}

export default Form;