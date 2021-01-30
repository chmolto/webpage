import { Component, Inject, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material'

export const DIALOG_TYPES = { MANCHESTER: 'manchester' }

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  public DIALOG_TYPES = DIALOG_TYPES
  public tipoDialogo
  constructor(@Inject(MAT_DIALOG_DATA) public data) {
    this.tipoDialogo = data.type
  }

  ngOnInit() {}
}
