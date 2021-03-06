import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgaModule} from '../../theme/nga.module';
import {Dashboard} from './dashboard.component';
import {routing}       from './dashboard.routing';
import { ChartsModule } from 'ng2-charts';
import { NgDragDropModule } from 'ng-drag-drop';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ChartsModule,
        NgaModule,
        routing,
        NgDragDropModule.forRoot(),
    ],
    declarations: [
        Dashboard
    ],
    providers: [
    ]
})
export class DashboardModule {
}
