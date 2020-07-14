import { Routes, RouterModule } from '@angular/router';

import { CardComponent } from './card/card.component';
import { ModuleWithProviders } from '@angular/core';
import { ExpandingPanelComponent } from './expanding-panel/expanding-panel.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { MyTableComponent } from './my-table/my-table.component';
import { ReactiveJsComponent } from './reactive-js/reactive-js.component';

export const router: Routes = [
	{path: '', redirectTo:'dashboard', pathMatch: 'full'},
	{path:'card', component: CardComponent },
	{path:'panel', component: ExpandingPanelComponent },
	{path:'dashboard', component: MyDashboardComponent },
	{path:'nav', component: MyNavComponent },	
	{path:'table', component: MyTableComponent },
	{path: 'reactive', component: ReactiveJsComponent }

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);