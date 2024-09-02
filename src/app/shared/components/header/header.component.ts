import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  
  
  constructor(
    private router: Router, 
    //private authServe: AuthService,
  ) { }
  ngOnInit(): void {
    //this.findAll();
  }


  logout(): void {
    //this.authServe.logout();
    this.router.navigate(['login']);
  }

 

}
