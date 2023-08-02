import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ClassModule } from './dashboard/pages/class/class.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from './shared/shared.module';
import eslocale from '@angular/common/locales/es-AR'
import { registerLocaleData } from '@angular/common';

registerLocaleData(eslocale);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule, // dashboard module
    AuthModule,
    MatCardModule,
    ClassModule,

  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-AR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
