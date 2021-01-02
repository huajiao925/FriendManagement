import { Component, Input, OnInit } from '@angular/core';
import { FriendsService } from '../friends.service';

@Component({
  selector: 'app-common-friends',
  templateUrl: './common-friends.component.html',
  providers: [FriendsService],
  styleUrls: ['./common-friends.component.css']
})
export class CommonFriendsComponent implements OnInit{
  public myFriends;
  constructor(private friendsServices: FriendsService) {}
  ngOnInit() {  }

  showCommonFriends(email1: string, email2: string){   
    if(email1 && email2){
      this.friendsServices.getCommonFriends(email1, email2).subscribe(
        data => this.myFriends = data
      )
    }
  }
}
