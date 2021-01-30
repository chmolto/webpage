import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MainComponent } from './components/main/main.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DialogComponent } from './components/main/dialog-components/dialog/dialog.component'
import { MatTooltipModule } from '@angular/material/tooltip'

@NgModule({
  declarations: [AppComponent, MainComponent, DialogComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatTooltipModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent],
})
export class AppModule {}
