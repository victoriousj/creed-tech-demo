import { PodcastService } from '@core/services/podcast.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Podcast } from '@core/models/podcast';

@Component({
  selector: 'app-podcast-detail',
  templateUrl: './podcast-detail.component.html',
  styleUrls: ['./podcast-detail.component.scss'],
})
export class PodcastDetailComponent implements OnInit {
  podcast: Podcast | undefined;
  private sub: any;

  constructor(
    private podcastService: PodcastService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      const id = params['id'];
      this.getPodcastDetails(id);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private getPodcastDetails(id: string) {
    this.podcastService
      .getPodcastDetails(id)
      .subscribe((res) => (this.podcast = res));
  }
}
