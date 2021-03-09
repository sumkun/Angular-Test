import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { LoginComponent } from './login/login.component';
import { DonateComponent } from './donate/donate.component';
import { NgoComponent } from './donate/ngo/ngo.component';
import { HealthComponent } from './donate/health/health.component';
import { OthersComponent } from './donate/others/others.component';
import { EducationComponent } from './donate/education/education.component';
import { PostComponent } from './post/post.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    HowitworksComponent,
    LoginComponent,
    DonateComponent,
    NgoComponent,
    HealthComponent,
    OthersComponent,
    EducationComponent,
    PostComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
