import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';
import { LoadingComponent } from './commons/loading/loading.component';
import { LoginModule } from './login/login.module';
import { HomeHeaderComponent } from './home/components/home-header/home-header.component';
import { HomeMenuComponent } from './home/components/home-menu/home-menu.component';
import { HomeFooterComponent } from './home/components/home-footer/home-footer.component';
import { HomeSearchComponent } from './home/components/home-search/home-search.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeHeaderComponent,
    HomeMenuComponent,
    HomeFooterComponent,
    HomeSearchComponent,
    BienvenidoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,   
    LoginModule,
    RouterModule.forRoot(AppRoutes, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
