import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PodcastListViewComponent } from "./list-view/podcast-list-view.component";
import { PodcastDetailComponent } from "./podcast-detail/podcast-detail.component";

const routes: Routes = [
  {
    path: '',
    component: PodcastListViewComponent
  },
  {
    path: 'detail/:id',
    component: PodcastDetailComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PodcastsRoutingModule {}
