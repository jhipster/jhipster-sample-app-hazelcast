import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { JhipsterHazelcastSampleApplicationSharedModule, UserRouteAccessService } from './shared';
import { JhipsterHazelcastSampleApplicationAppRoutingModule} from './app-routing.module';
import { JhipsterHazelcastSampleApplicationHomeModule } from './home/home.module';
import { JhipsterHazelcastSampleApplicationAdminModule } from './admin/admin.module';
import { JhipsterHazelcastSampleApplicationAccountModule } from './account/account.module';
import { JhipsterHazelcastSampleApplicationEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        JhipsterHazelcastSampleApplicationAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterHazelcastSampleApplicationSharedModule,
        JhipsterHazelcastSampleApplicationHomeModule,
        JhipsterHazelcastSampleApplicationAdminModule,
        JhipsterHazelcastSampleApplicationAccountModule,
        JhipsterHazelcastSampleApplicationEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterHazelcastSampleApplicationAppModule {}
