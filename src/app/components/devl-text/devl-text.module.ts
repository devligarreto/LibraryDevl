import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevlTextComponent } from './devl-text.component';

@NgModule({
  declarations: [
    DevlTextComponent
  ],
  exports: [
    DevlTextComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DevlTextModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: DevlTextModule,
    };
  }
}
