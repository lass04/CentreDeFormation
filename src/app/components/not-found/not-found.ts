import { Navbar } from './../navbar/navbar';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { PublicSpaceRoutingModule } from "../../public-space/public-space-routing-module";

@Component({
  selector: 'app-not-found',
  imports: [PublicSpaceRoutingModule,RouterModule,Navbar],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound {

}
