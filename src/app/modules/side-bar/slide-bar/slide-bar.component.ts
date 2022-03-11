import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-slide-bar',
  templateUrl: './slide-bar.component.html',
  styleUrls: ['./slide-bar.component.css']
})
export class SlideBarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  logout(){
    this.authService.logout()
  }

}
