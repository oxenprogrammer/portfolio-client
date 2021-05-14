import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

const modules = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatListModule,
];
@NgModule({
  declarations: [],
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
