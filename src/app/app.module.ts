import { ContactUsModule } from './contact-us/contact-us.module';
import { MenuModule } from './menu/menu.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MenuModule,
    ShoppingCartModule,
    ContactUsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
