import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    CreateUserComponent,
    UsersListComponent,
    LayoutComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
