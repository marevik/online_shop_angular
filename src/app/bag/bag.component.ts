import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { ItemService } from '../services/item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit {
  items:Item=new Item("","","", "");

  constructor(private itemService: ItemService, private router: ActivatedRoute) { }

  ngOnInit() {
    let i =this.router.snapshot.params["id"];
    this.items =this.itemService.getItem(i);
        // alert(this.items.imageSrc)

  }
}
