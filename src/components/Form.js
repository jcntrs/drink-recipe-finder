import React, { useContext } from 'react';
import { CategoriesContext } from '../context/CategoriesContext';

const Form = () => {
    const { hi } = useContext(CategoriesContext);
    console.log(hi);
    return (
        <form className="col-12">
            <fieldset className="text-center">
                <legend>Busca por Categoría o Ingredientes</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input className="form-control" name="ingredient" type="text" placeholder="Buscar por ingrediente" />
                </div>
                <div className="col-md-4">
                    <select className="form-control" name="category">
                        <option value="">Busca por categoría</option>
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