import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.scss',
  standalone: true,
  imports: []
})
export class PhoneComponent implements OnInit {
  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', () => {
      const images: NodeListOf<HTMLImageElement> = document.querySelectorAll('.display img');
      let currentImageIndex: number = 0;

      function changeImage(): void {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add('active');
      }

      setInterval(changeImage, 5000);
    });
  }


}
