import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material'
import { DialogComponent, DIALOG_TYPES } from './dialog-components/dialog/dialog.component'
import AOS from 'aos'
import { NoopScrollStrategy } from '@angular/cdk/overlay'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private matDialog: MatDialog) {
    console.log(navigator.language)
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

  public openManchesterGallery() {
    this.matDialog.open(DialogComponent, {
      data: { type: DIALOG_TYPES.MANCHESTER },
      scrollStrategy: new NoopScrollStrategy(),
    })
  }
}
