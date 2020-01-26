import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe []= [new Recipe('Boiled Eggs', 'Using this recipe you can prepare delicious eggs', 'https://wszystkoojedzeniu.pl/site/assets/files/2914/jajko-gotowane.jpg')
  ,new Recipe('Eggs in swert', 'Using this recipe you can preapre egg like masterchef!', 'https://kuchnialidla.pl/img/img/Original/f73d9cdb41-jajko-w-koszulce.jpg') 
  ,new Recipe('Minced chops', 'Using this receipe you can preapere delicious chops', 'https://bi.im-g.pl/im/e6/4a/11/z18132198ICR,Przepis-na-kotlety-mielone--Najlepsze--bo-bez-udzi.jpg') 
  ,new Recipe('Chops', 'Using this receipe you can preapere delicious chops with potatoes','https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/schabowe_00.jpg')
];

  constructor() { }

  @Output() theRecipe = new EventEmitter<Recipe>();
  ngOnInit() {
  }

  onRecipeSelect(recipe: Recipe) {
    this.theRecipe.emit(recipe);
  }

}
