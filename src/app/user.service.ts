import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, map } from 'rxjs';

export interface User {
  login:               string;
  id:                  number;
  node_id:             string;
  avatar_url:          string;
  gravatar_id:         string;
  url:                 string;
  html_url:            string;
  followers_url:       string;
  following_url:       string;
  gists_url:           string;
  starred_url:         string;
  subscriptions_url:   string;
  organizations_url:   string;
  repos_url:           string;
  events_url:          string;
  received_events_url: string;
  type:                string;
  site_admin:          boolean;
}

function getId() {
  return 1000 + Math.trunc(Math.random() * 1000);
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
   
  }

  loadUsers() {
    return this.http.get<User>('https://api.github.com/users');
  }

  // user: User = {
  //   id: 1000,
  // };

  // getNewUser() {
  //   return {
  //     id: getId(),
  //   };
  // }

  // updateUserId() {
  //   this.user.id = getId();
  // }


}

