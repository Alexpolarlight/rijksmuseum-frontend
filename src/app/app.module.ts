import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HeaderModule} from './shared/header/header.module';
import {MainPageModule} from './pages/main-page/main-page.module';
import {DetailsPageModule} from './pages/details-page/details-page.module';
import {TransferHttpModule} from '@gorniv/ngx-transfer-http';
import {TransferHttpCacheModule} from '@nguniversal/common';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    MainPageModule,
    DetailsPageModule,
    TransferHttpModule,
    BrowserModule,
    TransferHttpCacheModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
