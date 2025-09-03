import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-about-us',
  imports: [Navbar, Footer],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css'
})
export class AboutUs {

}
