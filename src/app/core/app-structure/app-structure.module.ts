import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {CommonModule} from '@angular/common';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {
  APP_SIDEBAR_NAV, AppBreadcrumbsComponent, AppFooterComponent, AppHeaderComponent, AppPrincipalIconComponent,
  AppSidebarComponent, AppSidebarFooterComponent, AppSidebarFormComponent, AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
} from './index';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";

const APP_COMPONENTS = [
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
  AppPrincipalIconComponent,
  APP_SIDEBAR_NAV
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot(),
    TabsModule.forRoot(),
    RouterModule,
    SharedModule
  ],
  declarations: [
    APP_COMPONENTS,
  ],
  providers: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    APP_COMPONENTS,
  ]
})
export class AppStructureModule { }
