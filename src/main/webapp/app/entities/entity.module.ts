import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'bank-account',
        loadChildren: () => import('./bank-account/bank-account.module').then(m => m.JhipsterHazelcastSampleApplicationBankAccountModule),
      },
      {
        path: 'label',
        loadChildren: () => import('./label/label.module').then(m => m.JhipsterHazelcastSampleApplicationLabelModule),
      },
      {
        path: 'operation',
        loadChildren: () => import('./operation/operation.module').then(m => m.JhipsterHazelcastSampleApplicationOperationModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class JhipsterHazelcastSampleApplicationEntityModule {}
