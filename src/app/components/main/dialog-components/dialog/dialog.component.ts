import { Component, Inject, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

export const DIALOG_TYPES = { MANCHESTER: 'manchester', ETHEREUM: 'ether' }

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  public DIALOG_TYPES = DIALOG_TYPES
  public languageIsEnglish = true
  public tipoDialogo
  constructor(@Inject(MAT_DIALOG_DATA) public data) {
    if (navigator.language === 'es-ES') {
      this.languageIsEnglish = false
    }
    this.tipoDialogo = data.type
  }

  ngOnInit() {}
}
