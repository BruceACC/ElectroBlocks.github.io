import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import {EmptySectionComponent} from './empty-section/empty-section.component';
import {NgModule} from '@angular/core';


export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'new-section', component: EmptySectionComponent }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), AppComponent, EmptySectionComponent],
  exports: [RouterModule],
})
export class AppModule {}
