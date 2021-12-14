import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

tweet={
  body:'Here is the body of tweet',
  isLiked: false,
  likesCount: 0
}

 
onClick(){
  this.tweet.isLiked = !this.tweet.isLiked;
  this.tweet.likesCount += (this.tweet.likesCount) ? -1 : 1; // counter()
}

counter(){
  if(this.tweet.isLiked = true){
    this.tweet.likesCount++;
    }else{
    this.tweet.likesCount--;
  } 
}

ngOnInit(): void {
}

}
