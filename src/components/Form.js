import React, { useContext, useState } from 'react';
import { CategoriesContext } from '../context/CategoriesContext';
import { RecipesContext } from '../context/RecipesContext';

const Form = () => {

    const { categories } = useContext(CategoriesContext);
    const { setSearchRecipes, setConsult } = useContext(RecipesContext);

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

    return (
        <form className="col-12" onSubmit={event => {
            event.preventDefault();
            setSearchRecipes(search);
            setConsult(true);
        }}>
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
        </form>
    );

}

export default Form;