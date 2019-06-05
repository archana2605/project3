import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuTopComponent } from './menu-top/menu-top.component';
import { MenuBottomComponent } from './menu-bottom/menu-bottom.component';
import { BannerComponent } from './banner/banner.component';
import { ExamPreparationComponent } from './exam-preparation/exam-preparation.component';
import { ExploreAllExamsComponent } from './explore-all-exams/explore-all-exams.component';
import { PopularCoursesComponent } from './popular-courses/popular-courses.component';
import { PopularTestSeriesComponent } from './popular-test-series/popular-test-series.component';
import { LatestArticlesComponent } from './latest-articles/latest-articles.component';
import { StartYourExamComponent } from './start-your-exam/start-your-exam.component';
import { FooterTopComponent } from './footer-top/footer-top.component';
import { FooterBottomComponent } from './footer-bottom/footer-bottom.component';
import { WhyGatebookComponent } from './why-gatebook/why-gatebook.component';
import { ExaminationLinksComponent } from './examination-links/examination-links.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { RouterModule, Routes } from '@angular/router';
import { OtherInstructionsComponent } from './other-instructions/other-instructions.component';
import { AnswerKeyComponent } from './answer-key/answer-key.component';
import { ApplicationComponent } from './application/application.component';
import { QuestionPaperComponent } from './question-paper/question-paper.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { SummaryComponent } from './summary/summary.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import {  FormsModule } from '@angular/forms';



const routing: Routes = [
  { path: '', component: HomeComponent },
  { path: 'instructions', component: InstructionsComponent },
  { path: 'other-instructions', component: OtherInstructionsComponent },
  { path: 'answerKey-component', component: AnswerKeyComponent },
  { path: 'application', component: ApplicationComponent },
  { path: 'question-paper', component: QuestionPaperComponent },
  { path: 'login', component: LoginComponent },
  { path: 'summary', component: SummaryComponent },
  { path: '**', redirectTo: '' }
]
@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    MenuTopComponent,
    MenuBottomComponent,
    BannerComponent,
    ExamPreparationComponent,
    ExploreAllExamsComponent,
    PopularCoursesComponent,
    PopularTestSeriesComponent,
    LatestArticlesComponent,
    StartYourExamComponent,
    FooterTopComponent,
    FooterBottomComponent,
    WhyGatebookComponent,
    ExaminationLinksComponent,
    InstructionsComponent,
    OtherInstructionsComponent,
    AnswerKeyComponent,
    ApplicationComponent,
    QuestionPaperComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule, NgbModule, NgbPaginationModule, NgbAlertModule, MatTabsModule,
    RouterModule.forRoot(routing),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
