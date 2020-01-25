import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CategoriesContext = createContext(); // Crea el context

const CategoriesProvider = props => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        /*  axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
         .then(response => {
             console.log(response);
         })
         .catch(error => {
             console.log(error);
         }); */

        const getCategories = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const categories = await axios.get(url);
            setCategories(categories.data.drinks);
        }
        getCategories();
    }, []);

    return (
        <CategoriesContext.Provider value={{ categories }}>
            {props.children}
        </CategoriesContext.Provider>
    );
    
}

export default CategoriesProvider;