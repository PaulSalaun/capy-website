import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.scss',
  standalone: true,
  imports: []
})
export class PhoneComponent implements OnInit, OnDestroy {
  private intervalId: any;
  private currentImageIndex: number = 0;
  private images: NodeListOf<HTMLImageElement>;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.images = document.querySelectorAll('.display img');
    this.startImageTransition();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private startImageTransition(): void {
    this.intervalId = setInterval(() => {
      this.changeImage();
    }, 4000);
  }

  private changeImage(): void {
    if (this.images.length === 0) return;

    this.renderer.removeClass(this.images[this.currentImageIndex], 'active');
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.renderer.addClass(this.images[this.currentImageIndex], 'active');
  }
}
