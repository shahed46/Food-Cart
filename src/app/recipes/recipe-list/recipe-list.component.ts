import { Component, OnInit } from '@angular/core'
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Beef',
      'cow meat',
      'http://3.bp.blogspot.com/-54ssf-Y6ctU/UCJTsP1oTlI/AAAAAAAAAfA/UjGNE22mFr0/s1600/mutton+Rezala+3.jpg',
    ),
    new Recipe(
      'Beef',
      'cow meat',
      'http://3.bp.blogspot.com/-54ssf-Y6ctU/UCJTsP1oTlI/AAAAAAAAAfA/UjGNE22mFr0/s1600/mutton+Rezala+3.jpg',
    ),
  ]
  constructor() {}

  ngOnInit(): void {}
}
