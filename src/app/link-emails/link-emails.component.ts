import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../friends.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-link-emails',
  templateUrl: './link-emails.component.html',
  providers: [FriendsService],
  styleUrls: ['./link-emails.component.css']
})
export class LinkEmailsComponent implements OnInit {
  constructor(private friendsServices: FriendsService, private messageService: MessageService) { }
  ngOnInit(): void {}

  linkFriends(email1: string, email2: string){
    if(email1 && email2){
      this.friendsServices.linkFriends(email1, email2);
      this.messageService.add("Friends linked up.")
    }
  }


}
