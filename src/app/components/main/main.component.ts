import { Component, OnInit } from '@angular/core'
import { DialogComponent, DIALOG_TYPES } from './dialog-components/dialog/dialog.component'
import AOS from 'aos'
import { NoopScrollStrategy } from '@angular/cdk/overlay'
import { fromEvent } from 'rxjs'
import { MatDialog } from '@angular/material/dialog'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public DIALOG_TYPES = DIALOG_TYPES
  public languageIsEnglish = true
  constructor(private matDialog: MatDialog) {
    if (navigator.language === 'es-ES') {
      this.languageIsEnglish = false
    }
    this.addColorListeners()
  }

  ngOnInit() {
    AOS.init({
      offset: 200,
      delay: 100,
    })
  }

  public scrollTo(location: string) {
    const element: any = document.getElementsByClassName(location)[0]
    const y = element.offsetTop
    window.scroll({
      top: y,
      behavior: 'smooth',
    })
  }

  public openDialog(type: string) {
    this.matDialog.open(DialogComponent, {
      data: { type },
      scrollStrategy: new NoopScrollStrategy(),
    })
  }

  private addColorListeners() {
    setTimeout(() => {
      const elementosLista = document.querySelectorAll('.listados li')
      elementosLista.forEach((el) => {
        const event = fromEvent(el, 'mouseover')
        event.pipe().subscribe((element: any) => {
          const icon = element.target.querySelectorAll('i')[0]
          const svg = element.target.querySelectorAll('svg')[0]
          if (icon) {
            icon.setAttribute('style', `color: ${this.getRandomColor()};`)
          }
          if (svg) {
            svg.querySelectorAll('path').forEach((path) => {
              path.setAttribute('style', `fill: ${this.getRandomColor()};`)
            })
          }
        })
      })
    }, 1000)
  }

  public getRandomColor() {
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }
}
