import React, { createContext, useState } from 'react';
export const CategoriesContext = createContext(); // Crea el context

const CategoriesProvider = props => {
    const [hi, setHi] = useState('Hi!');

    return (
        <CategoriesContext.Provider value={{ hi, setHi }}>
            {props.children}
        </CategoriesContext.Provider>
    );
}

export default CategoriesProvider;