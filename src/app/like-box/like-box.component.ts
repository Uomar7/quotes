import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like-box',
  templateUrl: './like-box.component.html',
})
export class LikeBoxComponent implements OnInit {

  numberOfLikes:number = 0;
  numberOfDislikes: number = 0;
  
  likeButtonClick(){
    this.numberOfLikes++;
  }
  dislikeButtonClick(){
    this.numberOfDislikes++;
  }
  constructor() { }

  ngOnInit() {
  }

}
