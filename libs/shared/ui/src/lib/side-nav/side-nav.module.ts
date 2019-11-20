import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [SideNavComponent],
  imports: [CommonModule, MatSidenavModule, MatIconModule, MatListModule],
  exports: [SideNavComponent]
})
export class SideNavModule {}
