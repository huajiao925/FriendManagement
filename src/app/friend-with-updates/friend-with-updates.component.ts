import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../friends.service';

@Component({
  selector: 'app-friend-with-updates',
  templateUrl: './friend-with-updates.component.html',
  providers: [FriendsService],
  styleUrls: ['./friend-with-updates.component.css']
})
export class FriendWithUpdatesComponent implements OnInit {
  public myFriends;
  constructor(private friendsServices: FriendsService) { }

  ngOnInit(): void {}

  showMySubscription(account: string){
    if(account){
      this.friendsServices.getSubscribedFriends(account).subscribe(
        data => this.myFriends = data
      )
    }
  }
}
