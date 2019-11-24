import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe []= [new Recipe('Boiled Eggs', 'Using this recipe you can prepare delicious eggs', 'https://wszystkoojedzeniu.pl/site/assets/files/2914/jajko-gotowane.jpg')
  ,new Recipe('Eggs in swert', 'Using this recipe you can preapre egg like masterchef!', 'https://kuchnialidla.pl/img/img/Original/f73d9cdb41-jajko-w-koszulce.jpg') 
];

  constructor() { }

  ngOnInit() {
  }

}
