import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{

  //Defined the array of recipes with Recipe as a model for object creation.
  recipes: Recipe[] = [
    new Recipe('Cake', 'Recipe of Cake', 'https://preppykitchen.com/wp-content/uploads/2022/05/Naked-Cake-Blog2-1140x1330.jpg')
  ];  
  constructor(){  }

  ngOnInit() {
  }
}
