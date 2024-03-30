import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { RestApisTestComponent } from './main-component/rest-apis-test/rest-apis-test.component';
import { SocketIoTestComponent } from './main-component/socket-io-test/socket-io-test.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainFrameComponent } from './main-component/main-frame/main-frame.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    RestApisTestComponent,
    SocketIoTestComponent,
    HomePageComponent,
    MainFrameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot({})
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    MainFrameComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
