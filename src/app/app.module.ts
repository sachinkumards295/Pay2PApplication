import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderPayComponent } from './header-pay/header-pay.component';
import { AnalyticMarketComponent } from './analytic-market/analytic-market.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPayComponent,
    AnalyticMarketComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
