import { Component } from '@angular/core';
import { ListPresentationService } from '../presentation-services/list-presentation.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  // You could make the presentation service public and access it directly from the html.
  constructor(public listPresentationService: ListPresentationService) { }

  // If you make the presentation service public, you don't need any of the code below. 
  // You may want some logic here...so this abstraction provides another option.
  listId$ = this.listPresentationService.listId$;
  productId$ = this.listPresentationService.productId$;
  listIdProductId$ = this.listPresentationService.listIdProductId$;

  updateListId = (listId) => this.listPresentationService.updateListId(listId);
  updateProductId = (productId) => this.listPresentationService.updateProductId(productId);

}
