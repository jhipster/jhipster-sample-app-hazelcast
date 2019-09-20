import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterHazelcastSampleApplicationSharedModule } from 'app/shared/shared.module';
import { UserMgmtComponent } from './user-management.component';
import { UserMgmtDetailComponent } from './user-management-detail.component';
import { UserMgmtUpdateComponent } from './user-management-update.component';
import { UserMgmtDeleteDialogComponent } from './user-management-delete-dialog.component';
import { userManagementRoute } from './user-management.route';

@NgModule({
  imports: [JhipsterHazelcastSampleApplicationSharedModule, RouterModule.forChild(userManagementRoute)],
  declarations: [UserMgmtComponent, UserMgmtDetailComponent, UserMgmtUpdateComponent, UserMgmtDeleteDialogComponent],
  entryComponents: [UserMgmtDeleteDialogComponent]
})
export class UserManagementModule {}
