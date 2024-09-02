import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  userProfileName: string;
  
  @ViewChild(MatMenuTrigger) menuTrigger: MatMenuTrigger;

  constructor(
    private router: Router, 
    //private authServe: AuthService,
    private storageService: StorageService, 
  ) { }

  ngOnInit(): void {
    this.userProfileName = this.storageService.getUserProfileName();
  }

  
  logout(): void {
    //this.authServe.logout();
    //this.router.navigate(['login']);
  }

  closeMenu() {
    this.menuTrigger.closeMenu();
  }


}

