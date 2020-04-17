import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('PaniPuri', 'Life', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIXswEuhcMeTu2RpTwtwJgEx-sAP0TXIK_C1mn63WVE7kQKkCg&usqp=CAU'),
    new Recipe('PaniPuri', 'Life', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIXswEuhcMeTu2RpTwtwJgEx-sAP0TXIK_C1mn63WVE7kQKkCg&usqp=CAU'),
    new Recipe('PaniPuri', 'Life', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIXswEuhcMeTu2RpTwtwJgEx-sAP0TXIK_C1mn63WVE7kQKkCg&usqp=CAU')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
