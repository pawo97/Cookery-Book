import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { RecipeListComponent } from '../recipe/recipe-list/recipe-list.component';

@Component({
  selector: 'app-recipe-creator',
  templateUrl: './recipe-creator.component.html',
  styleUrls: ['./recipe-creator.component.css']
})
export class RecipeCreatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  recipe: Recipe;
  rep: RecipeListComponent;
  onAddItem() {
    //console.log("hejka");
    this.recipe = new Recipe("ala", "ala", "ala");
    this.rep.addRecipe(this.recipe);
  }

}
