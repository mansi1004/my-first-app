import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit 
{
  @Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes:Recipe[]= 
  [
   new Recipe('a test recipe','this is simply a test','https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi0lfDGktzkAhWFPI8KHbFkAuEQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.amazon.com%2FDeluxe-Recipe-Binder-Favorite-Recipes%2Fdp%2F1640300171&psig=AOvVaw22I32FR0apZtR6YiT7li62&ust=1568957029333068'),
   new Recipe('another test recipe','this is simply a test','https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi0lfDGktzkAhWFPI8KHbFkAuEQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.amazon.com%2FDeluxe-Recipe-Binder-Favorite-Recipes%2Fdp%2F1640300171&psig=AOvVaw22I32FR0apZtR6YiT7li62&ust=1568957029333068')
  ];

  

  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe:Recipe)
  {
    this.recipeWasSelected.emit(recipe);
  }
}
