import { Component, HostBinding, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MaterialModule } from './material/material.module';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'UI';
  @HostBinding('class') class: string = '';
  isDark: boolean = false;

  constructor(private snackbar: MatSnackBar, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.isDark = localStorage.getItem('theme') == 'dark';
    this.setTheme(this.isDark);
  }

  save() {
    this.snackbar.open('Opened', 'OK');
  }

  setTheme(isdark: boolean) {
    if (isdark) {
      this.renderer.addClass(document.body, 'dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }
}
