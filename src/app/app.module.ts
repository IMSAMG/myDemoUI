import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { PsComponent } from './prescreening/ps.component';
import { MatDividerModule} from '@angular/material/divider';
import { MemberComponent } from './member/member.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DemoComponent } from './demographic/demo.component';
import { MatRadioModule } from '@angular/material/radio';
import { AddInfoComponent } from './additionalInformation/addInfo.component';
import { EligResultsComponent } from './EligResults/eligResults.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AfbComponent } from './applyforbenefits/afb.component';





@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    PsComponent,
    MemberComponent,
    DemoComponent,
    AddInfoComponent,
    EligResultsComponent,
    AfbComponent
  ],
  imports: [
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatDividerModule,
    MatDialogModule,
    MatRadioModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
