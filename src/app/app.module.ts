import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './component_ex/detail/detail.component';
import { HomeComponent } from './component_ex/home/home.component';
import { UserComponent } from './component_ex/user/user.component';
import { DatabindingComponent } from './component_ex/databinding/databinding.component';
import { EventComponent } from './component_ex/event/event.component';
import { TwoWaybindingComponent } from './component_ex/two-waybinding/two-waybinding.component';
import { TransformationsComponent } from './pipe/transformations/transformations.component';
import { UserNamePipe } from './pipe/user-name.pipe';

import localeja from '@angular/common/locales/ja';
import { registerLocaleData } from '@angular/common';

//localemy
registerLocaleData(localeja)

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    HomeComponent,
    UserComponent,
    DatabindingComponent,
    EventComponent,
    TwoWaybindingComponent,
    TransformationsComponent,
    UserNamePipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide:DEFAULT_CURRENCY_CODE,useValue:'EUR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
