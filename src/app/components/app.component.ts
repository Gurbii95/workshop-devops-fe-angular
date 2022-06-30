import {Component, OnDestroy, OnInit} from '@angular/core';
import {TestService} from '../services/test.service';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: '../app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'workshop-devops-fe-angular';
  environment = '';
  showButton = false;
  // @ts-ignore
  user$: Observable<any>;
  private destroy$ = new Subject<boolean>();

  constructor(private readonly testService: TestService) {
  }

  ngOnInit(): void {
    this.getConfig();
    this.getUser();
  }

  buttonClicked(): void {
    window.alert('You\'re my daddyyyyyyy!');
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private getConfig(): void {
    this.testService.getConfig().then(config => {
      this.environment = config.env;
      this.showButton = config.showButton;
    });
  }

  private getUser(): void {
    this.user$ = this.testService.getUser().pipe(takeUntil(this.destroy$));
  }
}
