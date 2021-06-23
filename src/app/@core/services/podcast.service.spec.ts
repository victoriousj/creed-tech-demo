import { HttpClient } from "@angular/common/http";
import { TestBed, waitForAsync } from "@angular/core/testing";
import { of, throwError } from "rxjs";
import { PodcastService } from "./podcast.service";
import * as MockGenre from "@core/models/mocks/podcast-genre.mock.json";
import * as MockPodcast from "@core/models/mocks/podcast.mock.json";

describe('@core/PodcastService', () => {
  let service: PodcastService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(waitForAsync(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });
  }));

  beforeEach(() => {
    service = TestBed.get(PodcastService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('getPodcastGenres()', () => {
    it('should return an empty array if an error is thrown', () => {
      httpClientSpy.get.and.returnValue(throwError({status: 404}));
      const result$ = service.getPodcastGenres();
      result$.subscribe(result => {
        expect(result).toEqual([]);
      });

      expect(result$).not.toBeNull();
    })

    it('should return the expected genre object when call is successful', () => {
      var testResult = [];
      testResult.push((MockGenre as any).default);

      httpClientSpy.get.and.returnValue(of(testResult));
      const result$ = service.getPodcastGenres();
      result$.subscribe(result => {
        expect(result).not.toBeNull();
        expect(typeof(result)).toBe(typeof([]));
        expect(result.length).toBe(1);
        expect(result[0].id).toEqual(MockGenre.id);
      });

      expect(result$).not.toBeNull();
    })

     it('should return the expected podcast object when call is successful', () => {
       var testResult = [];
       testResult.push((MockGenre as any).default);

       httpClientSpy.get.and.returnValue(of(testResult));
       const result$ = service.getPodcastDetails(MockPodcast.id);
       result$.subscribe((result) => {
         expect(result).not.toBeNull();
         expect(typeof result).toBe(typeof {});
         expect(result!.title).toEqual(MockPodcast.title);
       });

       expect(result$).not.toBeNull();
     });
  })
})
