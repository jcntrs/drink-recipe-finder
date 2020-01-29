import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = props => {

    const [recipeId, setRecipeId] = useState(null);
    const [recipeDetail, setRecipeDetail] = useState({});

    useEffect(() => {
        if (recipeId !== null) {
            const getRecipeDetail = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeId}`;
                const result = await axios.get(url);
                setRecipeDetail(result.data.drinks[0]);
            }
            getRecipeDetail();
        }
    }, [recipeId]);

    return (
        <ModalContext.Provider value={{ recipeDetail, setRecipeDetail, setRecipeId }}>
            {props.children}
        </ModalContext.Provider>
    );

}

export default ModalProvider;