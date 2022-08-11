import { PsComponent } from './ps.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  imports: [
  ],
  declarations: [
    MatIconModule,
    MatToolbarModule,
    CommonModule,
    BrowserModule,
    PsComponent
  ],
  exports: [PsComponent],
  entryComponents: [PsComponent],
})
export class PsModule { }
