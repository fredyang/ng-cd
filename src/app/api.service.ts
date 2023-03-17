import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


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

@Injectable({
  providedIn: 'root'
})
export class Api {

  constructor(private http: HttpClient) {
   
  }

  loadUsers() {
    return this.http.get<User[]>('https://api.github.com/users');
  }

}

