import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartsComponent } from './carts/carts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { ListClientComponent } from './list-client/list-client.component';
import { ListExpertComponent } from './list-expert/list-expert.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { ListTicketComponent } from './list-ticket/list-ticket.component';
import { NavbarComponent } from './navbar/navbar.component';



const routes: Routes = [
 {path:'',component:DashboardComponent},
 {path:'navbar',component:NavbarComponent},
 {path:'header',component:HeaderComponent},
 {path:'cart',component:CartsComponent},
 {path:'admin/list-article',component:ListArticleComponent},
 {path:'admin/list-ticket',component:ListTicketComponent},
 {path:'admin/list-manager',component:ListManagerComponent},
 {path:'admin/list-expert',component:ListExpertComponent},
 {path:'admin/list-client',component:ListClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
