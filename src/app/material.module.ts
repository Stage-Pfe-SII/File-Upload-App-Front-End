import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import {MatDialogModule} from '@angular/material/dialog'

@NgModule({
    imports: [
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatStepperModule,
        MatCardModule,
        MatIconModule,
        MatDividerModule,
        MatChipsModule,
        MatProgressBarModule,
        MatDialogModule
    ],
    exports: [
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatStepperModule,
        MatCardModule,
        MatIconModule,
        MatDividerModule,
        MatChipsModule,
        MatProgressBarModule,
        MatDialogModule
    ],
})
export class MaterialModule { }
