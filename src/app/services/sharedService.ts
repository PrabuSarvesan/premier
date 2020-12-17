import { Injectable } from '@angular/core';

@Injectable()
export class cartService {
  private productList: Array<object> = [];
  private selectedCity: string;
  deliveryType = 'Free';
  UpdateProduct(product: any) {
    let isExisting = false;
    this.productList.filter((list:any, index) => {
      if(product.id === list.id){
        this.productList[index] = product;
        isExisting = true;
      }
    });
    if(!isExisting){
      this.productList.push(product);
    }
  }
  ClearBasket(){
    this.productList = [];
  }
  RemoveProduct(product: any){
    this.productList.filter((list:any, index) => {
      if(product.id === list.id){
        this.productList.splice(index,1);
      }
    });
  }
  getSelectedCity() {return this.selectedCity};
  setSelectedCity(selectedCity) {this.selectedCity = selectedCity};
  getProduct() {return this.productList};
  getTotal() {
    let price: number = 0;
    this.productList.map((item:any)=>{
      price += ((item.original_price-(item.original_price*item.offer_percent/100))*item.totalQuantity);
    })
    return price.toFixed(2);
  };
  getSubTotal() {return this.getTotal()};
}
