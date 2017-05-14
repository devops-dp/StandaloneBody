import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SharedService } from './app.shared.service';
import { HeaderRedirectComponent } from './header-redirect/header-redirect.component';
import { DefaultRedirectComponent } from './default-redirect/default-redirect.component';
import { HeaderEventListener } from './header-event-listener'
const appRoutes: Routes = [
  { path: 'header', component: HeaderRedirectComponent },
  { path: 'home', component: DefaultRedirectComponent},
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: DefaultRedirectComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderRedirectComponent,
    DefaultRedirectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {provide: 'shared', useClass: SharedService},
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    HeaderEventListener
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
