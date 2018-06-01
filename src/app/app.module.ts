import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { ItemComponent } from './list-items/item/item.component';
import {MatCardModule} from '@angular/material/card';
import { ItemService } from './services/item.service';
import { HeaderComponent } from './header/header.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { RightColumnComponent } from './right-column/right-column.component';
import { SliderComponent } from './slider/slider.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MatIconRegistry} from '@angular/material';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GoodsComponent } from './goods/goods.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { WindowComponent } from './window/window.component';
import { BagComponent } from './bag/bag.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './admin/contact/contact.component';
import { UsersComponent } from './admin/users/users.component';
import { SalesComponent } from './admin/sales/sales.component';
import { LoginComponent } from './login/login.component';
import { MainImgComponent } from './home/main-img/main-img.component';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { RoleGuard } from './services/auth.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserService } from './services/user.service';
// import { ExamplesComponent } from '../../src/app/examples/examples.component';



const appRoutes: Routes = [
  {path:'contacts',component:ContactsComponent},
  {path:'about_us',component:AboutUsComponent},
  {path:'main',component:MainComponent},
  {path:'',component:HomeComponent},
  {path:'home/:id', component:WindowComponent},
  {path:'window', component:WindowComponent},
  {path:'admin', component:AdminComponent, canActivate : [RoleGuard]},
  {path:'bag', component:BagComponent},
  {path:'bag/:id', component:BagComponent},
  {path:'', redirectTo : 'contacts', pathMatch:'full'},
  {path:"signup", component: SignUpComponent}

  

]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListItemsComponent,
    ItemComponent,
    HeaderComponent,
    LeftMenuComponent,
    RightColumnComponent,
    SliderComponent,
    AboutUsComponent,
    ContactsComponent,
    GoodsComponent,
    HomeComponent,
    FooterComponent,
    WindowComponent,
    BagComponent,
    AdminComponent,
    ContactComponent,
    UsersComponent,
    SalesComponent,
    LoginComponent,
    MainImgComponent,
    SignUpComponent, 
    // ExamplesComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatMenuModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
    
    
    
    
  ],
  providers: [ItemService,MatIconRegistry, RoleGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(public matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
}
