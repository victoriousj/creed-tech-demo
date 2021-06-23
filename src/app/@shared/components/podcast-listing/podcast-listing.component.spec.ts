import { RouterTestingModule } from '@angular/router/testing';
import { waitForAsync } from '@angular/core/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PodcastListingComponent } from './podcast-listing.component';
import * as MockPodcast from '@core/models/mocks/podcast.mock.json';

describe('@shared/PodcastListingComponent', () => {
  let component: PodcastListingComponent;
  let fixture: ComponentFixture<PodcastListingComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [PodcastListingComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastListingComponent);

    component = fixture.componentInstance;
    component.index = 0;
    component.podcast = MockPodcast;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have podcast title', () => {
    component.podcast.title = MockPodcast.title;

    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector('.podcast-information-title').textContent
    ).toContain(MockPodcast.title);
  });

  it('on podcast data change, should have new title', () => {
    component.podcast.title = 'New Mock Title';

    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector('.podcast-information-title').textContent
    ).toContain('New Mock Title');
  });

  describe('viewPodcast()', () => {
    it('should return true', () => {
      const navigateSpy = spyOn(component.router, 'navigate');

      component.viewPodcast(MockPodcast.id);
      expect(navigateSpy).toHaveBeenCalledWith([
        'podcasts/detail/',
        MockPodcast.id,
      ]);
    });
  });
});
