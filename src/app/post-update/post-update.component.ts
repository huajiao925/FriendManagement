import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FriendPost } from 'src/models/friendPost';
import { FriendsService } from '../friends.service';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  providers: [FriendsService],
  styleUrls: ['./post-update.component.css']
})
export class PostUpdateComponent implements OnInit {

  constructor(private friendsServices: FriendsService) { }
  ngOnInit(): void {
  }

  makeAPost(newpost: NgForm){
    const sender = newpost.value.sendFrom;
    const receiver = newpost.value.receivedBy;
    const content = newpost.value.content;

    const newPost: FriendPost = {sendFrom: sender, receivedBy: receiver, post: content } as FriendPost;
    this.friendsServices.makePost(newPost).subscribe();
  }
}
