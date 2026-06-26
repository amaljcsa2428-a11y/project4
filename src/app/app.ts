import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { Product } from './product/product';
import { Contact } from './contact/contact';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Home, Product, Contact, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {}
