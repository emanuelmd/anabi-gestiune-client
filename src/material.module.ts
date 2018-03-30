import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';

const modules = [
  BrowserAnimationsModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatListModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatTabsModule,
  MatDialogModule,
];

@NgModule({
  imports: [modules],
  exports: [modules]
})

export class MaterialModule {
}
