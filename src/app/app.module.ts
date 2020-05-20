import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './home/presentation/presentation.component';
import { LetterComponent } from './home/letter/letter.component';
import { TechnologiesComponent } from './home/technologies/technologies.component';
import { SkillCardComponent } from './home/technologies/skill-card/skill-card.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { ProjectCardComponent } from './home/projects/project-card/project-card.component';
import { ContactsComponent } from './home/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PresentationComponent,
    LetterComponent,
    TechnologiesComponent,
    SkillCardComponent,
    ProjectsComponent,
    ProjectCardComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
