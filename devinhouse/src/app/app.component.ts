import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public pageName = 'DEVinhouse';
  public time = new Date();
  private intervalId: any;
  private clock: any;

  public ngOnInit(): void {
    this.updateClock();
    this.clock = document.getElementById('clock');
  }

  public ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  private updateClock(): void {
    this.intervalId = setInterval(() => {
      this.time = new Date();
      this.checkTime();
    }, 1000);
  }

  private checkTime(): void {
    if (this.time.getSeconds() % 2) {
      this.clock.style.color = 'red';
    } else if (!(this.time.getSeconds() % 2)) {
      this.clock.style.color = 'black';
    }
  }
}