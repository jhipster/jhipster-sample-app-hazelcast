import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterHazelcastSampleApplicationBankAccountModule } from './bank-account/bank-account.module';
import { JhipsterHazelcastSampleApplicationLabelModule } from './label/label.module';
import { JhipsterHazelcastSampleApplicationOperationModule } from './operation/operation.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        JhipsterHazelcastSampleApplicationBankAccountModule,
        JhipsterHazelcastSampleApplicationLabelModule,
        JhipsterHazelcastSampleApplicationOperationModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterHazelcastSampleApplicationEntityModule {}
