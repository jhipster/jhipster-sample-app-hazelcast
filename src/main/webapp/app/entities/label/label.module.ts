import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterHazelcastSampleApplicationSharedModule } from 'app/shared/shared.module';
import { LabelComponent } from './label.component';
import { LabelDetailComponent } from './label-detail.component';
import { LabelUpdateComponent } from './label-update.component';
import { LabelDeleteDialogComponent } from './label-delete-dialog.component';
import { labelRoute } from './label.route';

@NgModule({
  imports: [JhipsterHazelcastSampleApplicationSharedModule, RouterModule.forChild(labelRoute)],
  declarations: [LabelComponent, LabelDetailComponent, LabelUpdateComponent, LabelDeleteDialogComponent],
  entryComponents: [LabelDeleteDialogComponent]
})
export class JhipsterHazelcastSampleApplicationLabelModule {}
