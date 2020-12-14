import { Injectable } from "@angular/core";
import { createSelector, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { UsfListService } from "usf-list";
import { UsfProductService } from "usf-product";

export interface ListProductPresentation {
    listId: string;
    productId: string;
}

// This services provides an facade for the UI components. 
// This provides an RxJS interface without the complexity of NgRx for the UI team.
@Injectable({
    providedIn: 'root'
})
export class ListPresentationService {

    constructor(private store: Store, private usfListService: UsfListService, private usfProductService: UsfProductService) { }
   
    updateListId = (listId: string) => this.usfListService.updateListId(listId);
    updateProductId = (productId: string) => this.usfProductService.updateProductId(productId);

    listId$ = this.usfListService.listId$;
    productId$ = this.usfProductService.productId$;

    // You may think about combining feature states using straight RxJS. 
    // That will work, but you will lose out on the important memoization feature of NgRx.
    listIdProductId$: Observable<ListProductPresentation> = this.store.select(
        createSelector(this.usfListService.listFeatureSelector, this.usfProductService.productFeatureSelector,
            (listId: any, productId: any) => {

                const listProductViewModel: ListProductPresentation = {
                    listId,
                    productId
                }
                return listProductViewModel;
            }));

}
