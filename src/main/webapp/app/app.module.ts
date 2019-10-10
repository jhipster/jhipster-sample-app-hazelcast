import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterHazelcastSampleApplicationSharedModule } from 'app/shared/shared.module';
import { JhipsterHazelcastSampleApplicationCoreModule } from 'app/core/core.module';
import { JhipsterHazelcastSampleApplicationAppRoutingModule } from './app-routing.module';
import { JhipsterHazelcastSampleApplicationHomeModule } from './home/home.module';
import { JhipsterHazelcastSampleApplicationEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterHazelcastSampleApplicationSharedModule,
    JhipsterHazelcastSampleApplicationCoreModule,
    JhipsterHazelcastSampleApplicationHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterHazelcastSampleApplicationEntityModule,
    JhipsterHazelcastSampleApplicationAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class JhipsterHazelcastSampleApplicationAppModule {}
