import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items = this.cartService.getItems();
  priceInTotal = this.cartService.getPriceInTotal();

  checkoutForm = this.formBuilder.group({
    name: '',
    email: '',
    address: '',
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    this.priceInTotal = 0;
    Swal.fire('Success','Your order has been submitted','success'); 
    this.checkoutForm.reset();
  }
}
