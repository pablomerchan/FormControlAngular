import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  emailCtrl = new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(4)]);

  // Actua de forma reactiva ante cualquier cambio
  constructor() {
        this.emailCtrl.valueChanges
        .pipe(
          debounceTime(1000)
        )
      .subscribe(value => {
        console.log(value);
      });

   }

  ngOnInit() {
  }

  //Espera una accion por parte del usuario para realizar una accion
  getEmail(event: Event) {
    event.preventDefault();
    console.log(this.emailCtrl.value);
  }



}
