const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');
/*
App routes 
*/ 
router.get('/',recipeController.homepage);// when the server encounters the url as '/' then it renders the given page by the router
router.get('/categories/',recipeController.exploreCategories);// renders the page for the subroute 
router.get('/recipe/:id',recipeController.exploreRecipe);
router.get('/categories/:id',recipeController.exploreCategoriesById);// renders the page for the subroute 
router.post('/search',recipeController.searchRecipe);
router.get('/explore-latest',recipeController.exploreLatest);
router.get ('/explore-random',recipeController.exploreRandom);
router.get('/submit-recipe',recipeController.submitRecipe);
router.post('/submit-recipe',recipeController.submitRecipeOnPost);
module.exports = router;