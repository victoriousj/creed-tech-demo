import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../@shared/shared.module";
import { PodcastListViewComponent } from "./list-view/podcast-list-view.component";
import { PodcastsRoutingModule } from "./podcasts-routing.module";
import { PodcastDetailComponent } from './podcast-detail/podcast-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PodcastsRoutingModule,
  ],
  declarations: [
    PodcastListViewComponent,
    PodcastDetailComponent,
  ],
})
export class PodcastsModule { }