import { Component, OnInit, ElementRef } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'themes';
  theme: string = "my-light-theme";

  constructor(
   private overlayContainer: OverlayContainer
  ) {}

  ngOnInit(): void {
    //this.overlayContainer.themeClass = this.theme;
    //console.log(this.overlayContainer);
    this.overlayContainer.getContainerElement().classList.add(this.theme);
    console.log(this.overlayContainer.getContainerElement().classList);
  }

  onThemeChange(theme:string) {
   
   this.theme=theme;

   const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
   const themeClassesToRemove = Array.from(overlayContainerClasses).filter((item: string) => item.includes('-theme'));
   if (themeClassesToRemove.length) {
     overlayContainerClasses.remove(...themeClassesToRemove);
   }
   overlayContainerClasses.add(theme);
  }

}
