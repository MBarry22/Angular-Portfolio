import { Injectable } from '@angular/core';
import { Tag } from './model/tag';
import { tags } from './data/tags';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor() { }
  getTags(): Tag[] {
    return tags;
  }
}
