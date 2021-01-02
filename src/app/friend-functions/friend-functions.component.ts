import { Component, OnInit } from '@angular/core';
import { FriendList } from 'src/models/friendList';
import { FriendsService } from '../friends.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-friend-functions',
  templateUrl: './friend-functions.component.html',
  providers: [FriendsService],
  styleUrls: ['./friend-functions.component.css']
})
export class FriendFunctionsComponent implements OnInit {
  public myFriends;
  public selectedFriends = [];
  constructor(private friendsServices: FriendsService,private messageService: MessageService) { }

  ngOnInit(): void {}

  selected(email, selected){
    let isChecked = selected.currentTarget.checked;

    if(isChecked){
      this.selectedFriends.push(email);
    };
    if(isChecked === false){
      this.selectedFriends.forEach((element, index) => {
        if(element === email) this.selectedFriends.splice(index,1);
      });
    }
  }

  showMyFriends(account: string){
    if(account){
      this.friendsServices.getMyFriends(account).subscribe(
        data => this.myFriends = data
      )
    }
  }

  subscribeFriends(account: string){
    if(account && this.selectedFriends){
      this.selectedFriends.forEach(
        email => this.friendsServices.subscribe(account, email).subscribe(
        ))
    }

  }

  blockFriends(account: string){
        if(account && this.selectedFriends){
      this.selectedFriends.forEach(
        email => this.friendsServices.block(account, email).subscribe(
        ))
    }
  }



}
