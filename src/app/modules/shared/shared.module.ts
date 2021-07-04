import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../services/storage/storage.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
      providers: [ StorageService ]
    };
  }
}
