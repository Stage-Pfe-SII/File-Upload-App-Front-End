import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../admin/layout/layout.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,children:[
      {path:'',redirectTo:'users',pathMatch:'full'},
      {path: 'new-user', component: CreateUserComponent},
      {path: 'users', component: UsersListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
