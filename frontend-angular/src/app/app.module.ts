import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AngularWebStorageModule } from 'angular-web-storage';


import { AppComponent } from './app.component';
import { ProductsmanagerComponent } from './components/productsmanager/productsmanager.component';
import { AddproductsComponent } from './components/addproducts/addproducts.component';
import { EditproductsComponent } from './components/editproducts/editproducts.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ShowproductsComponent } from './components/showproducts/showproducts.component';
import { PayComponent } from './components/pay/pay.component';
import { AddressComponent } from './components/address/address.component';
import { PaymentComponent } from './components/payment/payment.component';
import { UpdateaddressComponent } from './components/updateaddress/updateaddress.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsmanagerComponent,
    AddproductsComponent,
    EditproductsComponent,
    ProfileComponent,
    SigninComponent,
    SignupComponent,
    ShowproductsComponent,
    PayComponent,
    AddressComponent,
    PaymentComponent,
    UpdateaddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    Ng2SearchPipeModule,
    AngularWebStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
