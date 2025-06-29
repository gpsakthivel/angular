import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-ng2-pdf-viewer-example',
  standalone: true,
  imports: [CommonModule, PdfViewerModule],
  templateUrl: './ng2-pdf-viewer-example.component.html',
  styleUrl: './ng2-pdf-viewer-example.component.css'
})
export class Ng2PdfViewerExampleComponent {
  pdfFilePath = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
}
