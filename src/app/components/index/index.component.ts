import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';


@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  usuario="Rodolfo";
}
