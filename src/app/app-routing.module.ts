import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonFriendsComponent } from './common-friends/common-friends.component';
import { FriendFunctionsComponent } from './friend-functions/friend-functions.component';
import { FriendWithUpdatesComponent } from './friend-with-updates/friend-with-updates.component';
import { LinkEmailsComponent } from './link-emails/link-emails.component';
import { PostUpdateComponent } from './post-update/post-update.component';

const routes: Routes = [
  {path:'addFriend', component: LinkEmailsComponent},
  {path:'postUpdate',component:PostUpdateComponent},
  {path:'checkFriend', component:FriendFunctionsComponent},
  {path:'commonFriend', component: CommonFriendsComponent},
  {path:'subscribedFriend', component: FriendWithUpdatesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
