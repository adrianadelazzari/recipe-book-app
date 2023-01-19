import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a test',
      'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvYTAxOS1qYWt1YmstMDc5My1jcnVzdHktcGl6emEtd2l0aC1zYWxhbWktbXVzaHJvb21zLW9uaW9uLmpwZw.jpg?s=SdA7mVnOnC9UsgkaGFCuswqp8uoXe1NQz_1zgbSwAJQ'
    ),
  ];

  ngOnInit(): void {}
}
