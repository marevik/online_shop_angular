import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Item } from '../../models/item.model';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  item: Item;

  @Input()
  index: number;
  constructor() { }

  ngOnInit() {
  }
 


}
