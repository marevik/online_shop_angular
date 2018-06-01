import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
  

})
export class HeaderComponent implements OnInit {

  

  ngOnInit() {
  }
 // default encapsulation. For styling children use ViewEncapsulation.None or global styling


  spaceScreens: Array<any>;
  max = 100;
  min = 0;
  step = 1;
  thumbLabel = true;
  value = 0;

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.spaceScreens = data.screenshots;
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get('./assets/data.json');
  }

  likeMe(i) {
    if (this.spaceScreens[i].liked == 0)
      this.spaceScreens[i].liked = 1;
    else
      this.spaceScreens[i].liked = 0;
  }

  deleteMe(i) {
    this.spaceScreens.splice(i, 1);
    console.log(i);
  }

}


