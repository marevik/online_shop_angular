import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from '../services/item.service';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../models/item.model';
import { ListItemsComponent } from '../list-items/list-items.component';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent implements OnInit {
items:Item=new Item("","","", "");
  constructor(private itemService: ItemService, private router: ActivatedRoute) { }

  ngOnInit() {
    let i =this.router.snapshot.params["id"];
    this.items =this.itemService.getItem(i);
    // alert(this.items.imageSrc)
  }

}
