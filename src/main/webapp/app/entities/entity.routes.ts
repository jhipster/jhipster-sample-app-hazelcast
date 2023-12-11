import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'bank-account',
    data: { pageTitle: 'jhipsterHazelcastSampleApplicationApp.bankAccount.home.title' },
    loadChildren: () => import('./bank-account/bank-account.routes'),
  },
  {
    path: 'label',
    data: { pageTitle: 'jhipsterHazelcastSampleApplicationApp.label.home.title' },
    loadChildren: () => import('./label/label.routes'),
  },
  {
    path: 'operation',
    data: { pageTitle: 'jhipsterHazelcastSampleApplicationApp.operation.home.title' },
    loadChildren: () => import('./operation/operation.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
