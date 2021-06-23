import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableInput, of } from 'rxjs';
import { PodcastGenre } from '@core/models/podcast-genre';
import { catchError, map } from 'rxjs/operators';
import { Podcast } from '@core/models/podcast';

@Injectable({ providedIn: 'root' })
export class PodcastService {
  constructor(private httpClient: HttpClient) {}

  getPodcastGenres(): Observable<PodcastGenre[]> {
    return this.httpClient
      .get<PodcastGenre[]>('/assets/data/podcasts-by-genre.json')
      .pipe(catchError(this.handleError));
  }

  getPodcastDetails(id: string): Observable<Podcast | undefined> {
    return this.httpClient
      .get<PodcastGenre[]>('/assets/data/podcasts-by-genre.json')
      .pipe(
        map((items) => {
          if (items.length > 0) {
            var webDesign = items.filter((x) => x.id === 140);
            return webDesign[0]?.podcasts?.find((item) => item.id == id);
          }
          return undefined;
        })
      );
  }

  handleError(
    error: any,
    caught: Observable<PodcastGenre[]>
  ): ObservableInput<any> {
    return of([]);
  }
}
