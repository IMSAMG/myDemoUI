import { DemoComponent } from './demo.component';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [
  ],
  declarations: [
    DemoComponent
  ],
  exports: [DemoComponent],
  entryComponents: [DemoComponent],
})
export class DemoModule { }
