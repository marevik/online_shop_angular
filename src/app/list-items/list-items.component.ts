import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  items: Item[] = [];
  constructor(private itemsService: ItemService) { }

  ngOnInit() {
    this.items = this.itemsService.getAllItems();
  }

}
