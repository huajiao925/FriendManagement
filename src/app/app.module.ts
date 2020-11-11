import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinkEmailsComponent } from './link-emails/link-emails.component';
import { FriendFunctionsComponent } from './friend-functions/friend-functions.component';
import { FriendWithUpdatesComponent } from './friend-with-updates/friend-with-updates.component';
import { PostUpdateComponent } from './post-update/post-update.component';
import { CommonFriendsComponent } from './common-friends/common-friends.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkEmailsComponent,
    FriendFunctionsComponent,
    FriendWithUpdatesComponent,
    PostUpdateComponent,
    CommonFriendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
