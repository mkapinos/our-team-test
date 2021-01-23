import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTeamComponent } from './our-team.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getMockBlock } from '../../../modules/block/tests/block.utils.spec';
import { By } from '@angular/platform-browser';

describe('OurTeamComponent', () => {
  let component: OurTeamComponent;
  let fixture: ComponentFixture<OurTeamComponent>;
  let page: Page;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurTeamComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { // Mock
            snapshot: {
              data: {
                block: getMockBlock()
              }
            }
          }
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurTeamComponent);
    page = new Page(fixture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display header title', () => {
    expect(component).toBeTruthy();
    const mockBlock = getMockBlock();
    expect(page.h1Text).toBe(mockBlock.title);
  });

  it('should display team cards', () => {
    expect(component).toBeTruthy();
    const mockBlock = getMockBlock();
    expect(page.cardsCount).toBe(mockBlock.cards.length);
  });

  it('should display for person card with: name, position, phone and email', () => {
    expect(component).toBeTruthy();
    const mockBlock = getMockBlock();
    expect(page.cardsCount).toBe(mockBlock.cards.length);

    expect(page.firstCardTitle).toBe(mockBlock.cards[0].title);
    expect(page.firstCardPosition).toBe(mockBlock.cards[0].description);
    expect(page.firstCardEmail).toBe(mockBlock.cards[0].link);
    expect(page.firstCardPhone).toBe(mockBlock.cards[0].text);

  });

  it('should can phone to person', () => {
    expect(component).toBeTruthy();
    expect(page.firstCardPhoneLink.href.indexOf('tel:') !== -1).toBeTruthy();
  });

  it('should send email to person', () => {
    expect(component).toBeTruthy();
    expect(page.firstCardEmailLink.href.indexOf('mailto:') !== -1).toBeTruthy();
  });

});

class Page {
  constructor(private fixture: ComponentFixture<OurTeamComponent>) {}

  get h1Text(): string {
    return (this.fixture.debugElement.query(By.css('h1'))?.nativeElement as HTMLElement).innerText;
  }

  get cardsCount(): number {
    return this.fixture.debugElement.queryAll(By.css('app-card')).length;
  }

  get firstCardTitle(): string {
    return (this.fixture.debugElement.query(By.css('app-card .t2e-title'))?.nativeElement as HTMLElement).innerText;
  }

  get firstCardPosition(): string {
    return (this.fixture.debugElement.query(By.css('app-card .t2e-position'))?.nativeElement as HTMLElement).innerText;
  }

  get firstCardPhoneLink(): HTMLLinkElement {
    return (this.fixture.debugElement.query(By.css('app-card .t2e-phone'))?.nativeElement as HTMLLinkElement);
  }

  get firstCardPhone(): string {
    return this.firstCardPhoneLink.innerText;
  }

  get firstCardEmailLink(): HTMLLinkElement {
    return (this.fixture.debugElement.query(By.css('app-card .t2e-email'))?.nativeElement as HTMLLinkElement);
  }

  get firstCardEmail(): string {
    return this.firstCardEmailLink.innerText;
  }
}
