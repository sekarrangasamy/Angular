import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserdetailslistComponent} from './userdetailslist/userdetailslist.component';


const routes: Routes = [{
  path:"",
  component:UserdetailsComponent
},{
  path:"userdetailslist",
  component:UserdetailslistComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
