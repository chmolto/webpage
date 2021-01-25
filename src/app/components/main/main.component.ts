import { Component } from '@angular/core'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor() {
    console.log(navigator.language)
  }

  public scrollTo(location: string) {
    const main = document.getElementsByClassName('main')[0]
    const element: any = document.getElementsByClassName(location)[0]
    const y = element.offsetTop
    main.scroll({
      top: y,
      behavior: 'smooth',
    })
  }
}
