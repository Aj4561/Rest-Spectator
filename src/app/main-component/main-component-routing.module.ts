import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestApisTestComponent } from './rest-apis-test/rest-apis-test.component';
import { SocketIoTestComponent } from './socket-io-test/socket-io-test.component';

const routes: Routes = [
  {
    path:'rest-api-test',
    component:RestApisTestComponent
  },
  {
    path:'socket-io-test',
    component: SocketIoTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainComponentRoutingModule { }
