import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import * as $ from 'jquery/dist/jquery.min.js';
import { cartService } from 'app/services/sharedService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class homeComponent implements OnInit {
  public data: Array<Object> = [];
  public selectedItem: any = {};
  private modelImage: any = null;
  public params: string = '';
  constructor(private router: Router, private http: Http, private cartService: cartService, private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.http.get('http://localhost:3004/add_list')
      .subscribe((data) => {
        this.data = data.json();
      });
    this.router.events.filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        this.params = (new URL(<any>document.location))['searchParams'].get("category");
        this.http.get('http://localhost:3004/add_list')
          .subscribe((data) => {
            this.data = this.params ? data.json().filter(obj => obj.category == this.params) : data.json();
          });
      });
    this.activatedRoute.params.subscribe(() => {
      this.params = (new URL(<any>document.location))['searchParams'].get("category");
      this.http.get('http://localhost:3004/add_list')
        .subscribe((data) => {
          this.data = this.params ? data.json().filter(obj => obj.category == this.params) : data.json();
        });
    });
  }
  showLoader() {
    $(".loader-icon").show()
  }
  hideLoader() {
    $(".loader-icon").hide()
  }
  loadClick(event) {
    this.showLoader();
    setTimeout(() => {
      this.data = [...this.data, ...this.data];
      this.hideLoader();
    }, 5000);
  }
  cardClick(event, item: any) {
    const result: any = this.cartService.getProduct().filter((list: any) => item.id === list.id);
    if (result.length > 0) {
      this.selectedItem = result[0];
    } else {
      item.totalQuantity = parseFloat(item.quantity).toFixed(2);
      this.selectedItem = item;
    }
    this.modelImage = '../assets/adv-images/' + this.selectedItem.img_url;
  }
  addClick(event, item) {
    this.cartService.UpdateProduct(item);
    this.showNotification('Item added successfully in cart.!');
    $('#detailModal .close')[0].click();
  }
  selectQuantity(type) {
    if (type == 'decreement') {
      this.selectedItem['totalQuantity'] -= parseFloat(this.selectedItem['quantity']);
      if (this.selectedItem['totalQuantity'] < this.selectedItem['quantity']) {
        this.selectedItem['totalQuantity'] = parseFloat(this.selectedItem['quantity']);
      }
    } else if (type == 'increement') {
      this.selectedItem['totalQuantity'] = parseFloat(this.selectedItem['totalQuantity']) + parseFloat(this.selectedItem['quantity']);
    }
    this.selectedItem['totalQuantity'] = this.selectedItem['totalQuantity'].toFixed(2);
  }
  showNotification(text) {
    let notificationElmt = document.getElementById('notificationbar');
    notificationElmt.innerText = text;
    notificationElmt.className = 'show';
    setTimeout(() => { this.hideNotification() }, 2000);
  }
  hideNotification() {
    let notificationElmt = document.getElementById('notificationbar');
    if (notificationElmt)
      notificationElmt.className = notificationElmt.className.replace('show', '');
  }
}
