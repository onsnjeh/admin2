import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { CartsComponent } from './carts/carts.component';
import { NbreTicketTotalComponent } from './nbre-ticket-total/nbre-ticket-total.component';
import { NbreTicketOuvertComponent } from './nbre-ticket-ouvert/nbre-ticket-ouvert.component';
import { NbreTicketFermeComponent } from './nbre-ticket-ferme/nbre-ticket-ferme.component';
import { NbreDocumentComponent } from './nbre-document/nbre-document.component';
import { NbreClientComponent } from './nbre-client/nbre-client.component';
import { NbreManagerComponent } from './nbre-manager/nbre-manager.component';
import { NbreExpertComponent } from './nbre-expert/nbre-expert.component';
import { ListTicketDernierComponent } from './list-ticket-dernier/list-ticket-dernier.component';
import { ListClientDernierComponent } from './list-client-dernier/list-client-dernier.component';
import { ListArticleDernierComponent } from './list-article-dernier/list-article-dernier.component';
import { DecimalPipe, NgFor } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListManagerDernierComponent } from './list-manager-dernier/list-manager-dernier.component';
import { ListExpertDernierComponent } from './list-expert-dernier/list-expert-dernier.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { ListTicketComponent } from './list-ticket/list-ticket.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { ListExpertComponent } from './list-expert/list-expert.component';
import { ListClientComponent } from './list-client/list-client.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { BoutonOpenComponent } from './bouton-open/bouton-open.component';
import { FormsModule } from '@angular/forms';
import { ListCategoryComponent } from './list-category/list-category.component';
import { TypeComponent } from './type/type.component';
import { ThemeComponent } from './theme/theme.component';
import { SpecialiteComponent } from './specialite/specialite.component';
import { NomManagerComponent } from './nom-manager/nom-manager.component';

import { HttpClientModule } from '@angular/common/http';
import { PriorityComponent } from './priority/priority.component';
import { NomExpertComponent } from './nom-expert/nom-expert.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ClientRechercheComponent } from './recherche/client-recherche/client-recherche.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    HeaderComponent,
    CartsComponent,
    NbreTicketTotalComponent,
    NbreTicketOuvertComponent,
    NbreTicketFermeComponent,
    NbreDocumentComponent,

    NbreClientComponent,
    NbreManagerComponent,
    NbreExpertComponent,
    ListTicketDernierComponent,
    ListClientDernierComponent,
    ListArticleDernierComponent,
    ListManagerDernierComponent,
    ListExpertDernierComponent,
    ListArticleComponent,
    ListTicketComponent,
    ListManagerComponent,
    ListExpertComponent,
    ListClientComponent,
    BoutonOpenComponent,
    ListCategoryComponent,
    PriorityComponent,
    NomExpertComponent,
    TypeComponent,
    ThemeComponent,
    SpecialiteComponent,

    NomManagerComponent,
     ClientRechercheComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DecimalPipe,
    NgFor,
    FormsModule,
    NgbModule,
    NgbCollapseModule,
    NgbNavModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
