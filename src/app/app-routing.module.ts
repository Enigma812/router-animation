import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'page1',
    loadChildren: () =>
      import('../modules/page1/page1.module').then((m) => m.Page1Module),
      data: { animation: 'isRight1'}
  },
  {
    path: 'page2',
    loadChildren: () =>
      import('../modules/page2/page2.module').then((m) => m.Page2Module),
      data: { animation: 'isRight2'}
  },
  {
    path: 'page3',
    loadChildren: () =>
      import('../modules/page3/page3.module').then((m) => m.Page3Module),
      data: { animation: 'isRight3'}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
