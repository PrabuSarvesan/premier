import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  Observable
} from 'rxjs/Observable';
import {
  Subscription
} from 'rxjs/Subscription';
import {
  cartService
} from 'app/services/sharedService';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shoppingCart.component.html',
  styleUrls: ['./shoppingCart.component.scss'],
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  public itemCount: number;
  private products: any;
  private deliveryType: string;
  private cartSubscription: Subscription;
  private total = this.cartService.getTotal();
  private subTotal = this.cartService.getSubTotal()
  public constructor(private cartService: cartService) {}

  public clearCart(): boolean {
    this.cartService.ClearBasket();
    this.products = this.cartService.getProduct();
    return false;
  }

  public ngOnInit(): void {
    this.products = this.cartService.getProduct();
    this.deliveryType = 'Free';
    this.itemCount = this.products.length;
    this.total = this.cartService.getTotal();
    this.subTotal = this.cartService.getSubTotal()
  }

  public ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  romoveCartItem(item){
    this.cartService.RemoveProduct(item);
    this.total = this.cartService.getTotal();
    this.subTotal = this.cartService.getSubTotal();
  }

  selectQuantity(item, type) {
    if (type === 'decreement') {
      item['totalQuantity'] -= parseFloat(item['quantity']);
      if (item['totalQuantity'] < item['quantity']) {
        item['totalQuantity'] = parseFloat(item['quantity']);
      }
    } else if (type === 'increement') {
      item['totalQuantity'] = parseFloat(item['totalQuantity']) + parseFloat(item['quantity']);
    }
    item['totalQuantity'] = item['totalQuantity'].toFixed(2);
    this.cartService.UpdateProduct(item);
    this.total = this.cartService.getTotal();
    this.subTotal = this.cartService.getSubTotal()
  }
}
