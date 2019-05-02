import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  JhipsterHazelcastSampleApplicationSharedLibsModule,
  JhipsterHazelcastSampleApplicationSharedCommonModule,
  JhiLoginModalComponent,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [JhipsterHazelcastSampleApplicationSharedLibsModule, JhipsterHazelcastSampleApplicationSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JhipsterHazelcastSampleApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterHazelcastSampleApplicationSharedModule {
  static forRoot() {
    return {
      ngModule: JhipsterHazelcastSampleApplicationSharedModule
    };
  }
}
