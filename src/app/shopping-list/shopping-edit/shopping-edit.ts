import { Component } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  standalone: false,
  templateUrl: './shopping-edit.html',
  styleUrl: './shopping-edit.css',
})
export class ShoppingEdit {

  constructor(private slService: ShoppingListService) {

  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient( value.name, value.amount);
    this.slService.addIngredient(newIngredient);
  }
}
