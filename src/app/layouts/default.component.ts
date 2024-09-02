import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements AfterViewInit {
  @ViewChild(MatDrawer)
  sidebar! : MatDrawer;

  constructor(
    private observer: BreakpointObserver,
    private cdRef: ChangeDetectorRef
  ) { }
  
  ngAfterViewInit(): void {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if(res.matches){
        this.sidebar.mode = 'over';
        this.sidebar.close();
      }else{
        this.sidebar.mode = 'side';
        this.sidebar.open();
        this.cdRef.detectChanges(); 
      }
    })
  }
}
