import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { TestDialogComponent } from './test-dialog/test-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor (private dialog: MatDialog) {

  }
  opendialog() {
    console.log ('Dialog');
    const dialogconfig = new MatDialogConfig();
    dialogconfig.disableClose = true;
    dialogconfig.autoFocus = true ;
    this.dialog.open(TestDialogComponent, dialogconfig);
  }
}
