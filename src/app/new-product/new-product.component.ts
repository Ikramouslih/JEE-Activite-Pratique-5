import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})

export class NewProductComponent implements OnInit{

  public productForm! : FormGroup;
  constructor(private productService: ProductService, private fb:FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      price: this.fb.control(0),
      checked: this.fb.control(false)
    })
  }

  saveProduct() {
    let product = this.productForm.value;
    this.productService.saveProduct(product).subscribe({
      next: (data) => {
        alert(JSON.stringify(data));
        this.productForm.reset();
        this.router.navigate(['/products']);
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

}
