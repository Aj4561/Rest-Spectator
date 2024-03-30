import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() toggleSection = new EventEmitter<string>(); 


  constructor(private router:Router) { }

  ngOnInit() {
   
    
  }

  toggleCollection(section: string) {
    this.toggleSection.emit(section);
  }
  toggleenv(section:string){
    this.toggleSection.emit(section);
  }
  toggleapis(section:string){
    this.toggleSection.emit(section);
    this.router.navigate([`/main-page/rest-api-test`])
  }
  mockserv(section:string){
    this.toggleSection.emit(section);
  }
  monitor(section:string){
    this.toggleSection.emit(section);
  }
  flow(section:string){
    this.toggleSection.emit(section);
  }
  history(section:string){
    this.toggleSection.emit(section);
  }

}
