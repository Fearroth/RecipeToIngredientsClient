
import api from './api';
import { createRecipeType, Recipe, updateRecipeType } from '../types/Recipe';

//get 15 recipes
export const getRecipes = async (): Promise<Recipe[]> => {
  const response = await api.get('/recipes/');
  return response.data.recipes;
};

export const getRecipe = async (id: number): Promise<Recipe> => {
  const response = await api.get(`/recipes/${id}`);
  return response.data.recipe;
};

export const createRecipe = async (recipe: createRecipeType): Promise<createRecipeType> => {
  const response = await api.post('/recipes/', recipe);
  return response.data.recipe;
};

export const updateRecipe = async (id: number, recipe: updateRecipeType): Promise<updateRecipeType> => {
  const response = await api.put(`/recipes/${id}`, recipe);
  return response.data.recipe;
};

export const deleteRecipe = async (id: number): Promise<void> => {
  await api.delete(`/recipes/${id}`);
};



export const getRecipesFront = async (): Promise<Recipe[]> => {
  const response = await api.get('front/recipes/');
  return response.data.recipes;
};