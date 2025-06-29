import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { InterfaceExampleComponent } from "./interface-example/interface-example.component";
// import { CustomDirectiveExampleComponent } from "./custom-directive-example/custom-directive-example.component";
// import { SocialMediaShareBtnExampleComponent } from './social-media-share-btn-example/social-media-share-btn-example.component';
// import { Ng2PdfViewerExampleComponent } from './ng2-pdf-viewer-example/ng2-pdf-viewer-example.component';
// import { BtnClickEventExampleComponent } from './btn-click-event-example/btn-click-event-example.component';
// import { HighchartsExampleComponent } from './highcharts-example/highcharts-example.component';
// import { AmountToWordsExampleComponent } from "./amount-to-words-example/amount-to-words-example.component";
// import { DateFormatExampleComponent } from './date-format-example/date-format-example.component';
// import { AsyncPipeExampleComponent } from './async-pipe-example/async-pipe-example.component';
// import { CustomPipeExampleComponent } from "./custom-pipe-example/custom-pipe-example.component";
// import { RoutingExampleComponent } from './routing-example/routing-example.component';
import { StructuralDirectiveExampleComponent } from './structural-directive-example/structural-directive-example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // RouterOutlet, 
    // InterfaceExampleComponent, 
    // CustomDirectiveExampleComponent, 
    // SocialMediaShareBtnExampleComponent,
    // Ng2PdfViewerExampleComponent,
    // BtnClickEventExampleComponent,
    // HighchartsExampleComponent
    // AmountToWordsExampleComponent, 
    // DateFormatExampleComponent,
    // AsyncPipeExampleComponent
    // CustomPipeExampleComponent,
    // RoutingExampleComponent,
    StructuralDirectiveExampleComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'it-solution-stuff';
}
