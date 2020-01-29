import React, { useContext, useState } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import { ModalContext } from '../context/ModalContext';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const getModalStyle = () => {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const RecipeList = () => {


    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false)
    }

    const { recipes } = useContext(RecipesContext);
    const { recipeDetail, setRecipeDetail, setRecipeId } = useContext(ModalContext);

    return (
        <div className="row mt-5">
            {recipes.map(element =>
                <div className="col-md-4 mb-3" key={element.idDrink}>
                    <div className="card">
                        <h2 className="card-header"><strong>{element.strDrink}</strong></h2>
                        <img className="card-img-top" src={element.strDrinkThumb} alt={`Imagen de ${element.strDrink}`} />
                        <div className="card-body">
                            <button className="btn btn-block btn-outline-warning" onClick={() => {
                                setRecipeId(element.idDrink);
                                handleOpen();
                            }}>
                                <strong>Ver Receta</strong>
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <Modal open={open} onClose={() => {
                setRecipeId(null);
                setRecipeDetail({});
                handleClose();
            }}>
                <div className={classes.paper} style={modalStyle}>
                    <h1>{recipeDetail.strDrink}</h1>
                    <h3 className="mt-4">{recipeDetail.strDrink ? 'Instructions' : 'Loading...'}</h3>
                    <p>{recipeDetail.strInstructions}</p>
                    <img className="img-fluid my-4" src={recipeDetail.strDrinkThumb} />
                </div>
            </Modal>
        </div>
    );

}

export default RecipeList;