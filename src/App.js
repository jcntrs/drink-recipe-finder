import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import RecipeList from './components/RecipeList';
import CategoriesProvider from './context/CategoriesContext';
import RecipesProvider from './context/RecipesContext';

const App = () => {
    return (
        <CategoriesProvider>
            <RecipesProvider>
                <Header />
                <div className="container mt-5">
                    <div className="row">
                        <Form />
                    </div>
                    <RecipeList />
                </div>
            </RecipesProvider>
        </CategoriesProvider>
    );
}

export default App;