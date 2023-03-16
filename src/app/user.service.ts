import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, map } from 'rxjs';
export interface User {
  id: number;
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

  user: User = {
    id: 1000,
  };

  getNewUser() {
    return {
      id: getId(),
    };
  }

  updateUserId() {
    this.user.id = getId();
  }

  getGitHubUser() {
    return this.http.get('https://api.github.com/users').pipe(map(x => x[0]));
  }
}

