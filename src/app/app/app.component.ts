import { Component } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    'class': 'box'
  }
})
export class AppComponent {
 
  constructor(public userService: UserService) {
    setInterval(() => {
      this.updateTime();
    }, 1000);

    userService.getGitHubUser().subscribe((guser)=> {
      this.githubUser = guser;
      console.log(guser);
    })
  }

  githubUser: any;

  count = 0;
  now = new Date();

  updateTime() {
    this.now = new Date();
  }

  increment() {
    this.count++;
  }
}
