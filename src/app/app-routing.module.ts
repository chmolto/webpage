import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MatDialogModule } from '@angular/material/dialog'

const routes: Routes = []

@NgModule({
  imports: [RouterModule.forRoot(routes), MatDialogModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
