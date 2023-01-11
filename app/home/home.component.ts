import { Component, OnInit } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  animales = ['Vaca', 'Cerdo', 'Oveja', 'Ternera', 'Gallinas'];

  error: boolean;
  errorMessage: string;

  portFolioItems: any[] = [];
  addTemplate: boolean = false;

  token: string;
  constructor(private router: Router) {
    this.getFromDB();
  }

  getFromDB(): any[] {
    // return this.portFolioItems = [{projectName:'Portfolio Name', link:'Portfolio link'}]
    return [];
  }
  addItem() {
    this.addTemplate = true;
  }
  deleteItem(event, item) {
    //implement firestore delete for user's portfolio

    //the code below is just to simiulate a delete, don't use this for our project.
    //delete should occur by simply removing the item from the firestore collection
    //which will automatically update the DOM
    console.log(event);
    let portfolioItem = event.target.offsetParent;
    portfolioItem.style.display = 'none';
  }
  cancelAdd() {
    this.addTemplate = false;
    this.error = false;
  }

  login() {
    this.router.navigate(['']);
  }

  save(item) {
    if (item.projectName === '' || item.link === '') {
      this.error = true;
      return (this.errorMessage = 'Campos faltantes.');
    }
    this.portFolioItems.push(item);
    this.addTemplate = false;
    this.error = false;
  }

  ngOnInit() {
    this.token = window.sessionStorage.getItem('token');
    console.log('token', this.token);
  }
}
