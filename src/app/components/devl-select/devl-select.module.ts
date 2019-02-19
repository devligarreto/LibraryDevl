import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevlSelectComponent } from './devl-select.component';

@NgModule({
  declarations: [
    DevlSelectComponent,
  ],
  exports: [
    DevlSelectComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class DevlSelectModule { 
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: DevlSelectModule,
    }
  }
}
