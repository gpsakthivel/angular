import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
// import { ShareIconsModule } from 'ngx-sharebuttons';

@Component({
  selector: 'app-social-media-share-btn-example',
  standalone: true,
  imports: [
    CommonModule, 
    // ShareButtonsModule,
    // ShareIconsModule,
  ],
  templateUrl: './social-media-share-btn-example.component.html',
  styleUrl: './social-media-share-btn-example.component.css'
}) 
export class SocialMediaShareBtnExampleComponent {

}
