import { Injectable } from '@angular/core';
import { Category } from './model/category';
import { categories } from './data/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  getCategories(): Category[] {
    return categories;
  }
}
