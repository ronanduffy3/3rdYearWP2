import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { UserServiceService } from './user-service.service';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, AuthGuard, UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
