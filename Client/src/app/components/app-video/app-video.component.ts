import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-app-video',
  templateUrl: './app-video.component.html',
  styleUrls: ['./app-video.component.css']
})
export class AppVideoComponent {
  videoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets\video.mp4');
  }
}
