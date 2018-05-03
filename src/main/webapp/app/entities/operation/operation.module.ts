import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterHazelcastSampleApplicationSharedModule } from 'app/shared';
import {
    OperationService,
    OperationComponent,
    OperationDetailComponent,
    OperationUpdateComponent,
    OperationDeletePopupComponent,
    OperationDeleteDialogComponent,
    operationRoute,
    operationPopupRoute,
    OperationResolve
} from './';

const ENTITY_STATES = [...operationRoute, ...operationPopupRoute];

@NgModule({
    imports: [JhipsterHazelcastSampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        OperationComponent,
        OperationDetailComponent,
        OperationUpdateComponent,
        OperationDeleteDialogComponent,
        OperationDeletePopupComponent
    ],
    entryComponents: [OperationComponent, OperationUpdateComponent, OperationDeleteDialogComponent, OperationDeletePopupComponent],
    providers: [OperationService, OperationResolve],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterHazelcastSampleApplicationOperationModule {}
