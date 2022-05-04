import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public pageName = 'DEVinhouse'
  public time = new Date();
  private intervalId: any;
  private clock: any;


  ngOnInit() {
    this.updateClock();
    this.clock = document.getElementById("clock");
  }

  public updateClock() {
    this.intervalId = setInterval(() => {
      this.time = new Date();
      this.checkTime();
    }, 1000);
  }

  

  public checkTime(): void {
    if (this.time.getSeconds() % 2) {
      this.clock.style.color = 'red';
    }
    else if (!(this.time.getSeconds() % 2)) {
      this.clock.style.color = 'black';
    }
  }

  

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

}

