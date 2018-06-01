import { Injectable } from "@angular/core";
import { Item } from "../models/item.model";

@Injectable()
export class ItemService {

    items: Item[] = [
        new Item("Volkswagen Passat", "Image information", 35000, "https://www.cstatic-images.com/car-pictures/xl/USC60VWC041C021001.png"),
        new Item("Volkswagen Tiguan", "Image information", 54000, "https://www.cstatic-images.com/car-pictures/xl/USC80VWS031B021001.png"),
        new Item("Volkswagen Touareg", "Image information", 60000, "https://cdn.riastatic.com/photos/ria/news_auto/0/16/1681/1681bx.jpg"),
        new Item("Volkswagen Passat", "Image information", 75000, "https://www.cstatic-images.com/car-pictures/xl/USC60VWC041C021001.png"),
        new Item("Volkswagen Tiguan", "Image information", 54000, "https://www.cstatic-images.com/car-pictures/xl/USC80VWS031B021001.png"),
        new Item("Volkswagen Touareg", "Image information", 60000, "https://cdn.riastatic.com/photos/ria/news_auto/0/16/1681/1681bx.jpg"),
        new Item("Volkswagen Passat", "Image information", 75000, "https://www.cstatic-images.com/car-pictures/xl/USC60VWC041C021001.png"),
        new Item("Volkswagen Tiguan", "Image information", 54000, "https://www.cstatic-images.com/car-pictures/xl/USC80VWS031B021001.png"),
        new Item("Volkswagen Touareg", "Image information", 60000, "https://cdn.riastatic.com/photos/ria/news_auto/0/16/1681/1681bx.jpg"),
        new Item("Volkswagen Passat", "Image information", 35000, "https://www.cstatic-images.com/car-pictures/xl/USC60VWC041C021001.png"),
        new Item("Volkswagen Tiguan", "Image information", 54000, "https://www.cstatic-images.com/car-pictures/xl/USC80VWS031B021001.png"),
        new Item("Volkswagen Touareg", "Image information", 60000, "https://cdn.riastatic.com/photos/ria/news_auto/0/16/1681/1681bx.jpg"),
        new Item("Volkswagen Passat", "Image information", 35000, "https://www.cstatic-images.com/car-pictures/xl/USC60VWC041C021001.png"),
        new Item("Volkswagen Tiguan", "Image information", 54000, "https://www.cstatic-images.com/car-pictures/xl/USC80VWS031B021001.png"),
        new Item("Volkswagen Touareg", "Image information", 60000, "https://cdn.riastatic.com/photos/ria/news_auto/0/16/1681/1681bx.jpg"),
    
    ]

    getAllItems() {
        return this.items;
    }

    getItem(i){
        return this.items[i];
    }
}