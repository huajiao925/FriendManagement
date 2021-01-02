import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { FriendList } from 'src/models/friendList';
import { FriendPost } from 'src/models/friendPost';
import { MessageService } from './message.service';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable()
export class FriendsService {

  constructor(private http: HttpClient, private messageService: MessageService){}

  getMyFriends(account: string){
    account = account.trim();
    return this.http.get(environment.api_url + 'friend/allFriends/' + account);
  }

  subscribe(email1: string, email2: string){
    let body = {"emails": [email1, email2]};
    return this.http.put<FriendList>(environment.api_url + 'friend/subscribe', body);
  }

  block(email1: string, email2: string){
    let body = {"emails": [email1, email2]};
    return this.http.put<FriendList>(environment.api_url + 'friend/block', body);
  }

  linkFriends(email1: string, email2: string){
    let body = {"friends": [email1, email2]};

    return this.http.put<FriendList>(environment.api_url + 'friend/linkup', body);
  }

  getSubscribedFriends(account: string){
    account = account.trim();
    return this.http.get(environment.api_url + 'friend/allSubList/' + account);
  }

  getCommonFriends(email1: string, email2: string){
    let body = {"email1": email1, "email2": email2}
    return this.http.post(environment.api_url + 'friend/commonFriends', body);
  }

  //postUpdates
  makePost(post: FriendPost): Observable<FriendPost>{
    return this.http.post<FriendPost>(environment.api_url+ 'post/makeapost', post, httpOptions)
    .pipe(
      );
    
  }
}

