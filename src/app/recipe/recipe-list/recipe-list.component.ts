import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Recipe } from '../recipe.model'
//import { RecipeCreatorComponent } from 'src/app/recipe-creator/recipe-creator.component';
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

name: string;
prepare: string;
imgSrc: string;


  constructor() { }

  @Output() theRecipe = new EventEmitter<Recipe>();
  ngOnInit() {
  }

  onRecipeSelect(recipe: Recipe) {
    this.theRecipe.emit(recipe);
  }

  showVar: boolean = true;
  //newRecipe: any;
  //recipeCreator: RecipeCreatorComponent;

  @Input() showMePartially: boolean = false;
  @Input() newRecipe: Recipe;



  toggleChild(){
        this.showMePartially = !this.showMePartially;
  }

  public doSomething(date: any):void {
    console.log('Picked date: ', date);
}

addRecipe(receipe, img) {
  this.recipes.push(receipe);
  this.updateNameNew(receipe.name, this.imgSrc)
  this.name = '';
  this.prepare = '';
  this.imgSrc = '';
}

onAddItem() {
  console.log("hejka2222");
  var newRecipe = new Recipe(this.name, this.prepare, '');
  this.recipes.push(newRecipe);
  this.updateNameNew(this.name, this.imgSrc)
  this.name = '';
  this.prepare = '';
  this.imgSrc = '';
}
  updateNameNew(name, src) {
    for(let r of this.recipes) {
      if(r.name == name) {
        r.imgPath = src;
      }
    }
  }

}
