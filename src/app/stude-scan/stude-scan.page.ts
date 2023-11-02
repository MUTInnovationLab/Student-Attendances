import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-stude-scan',
  templateUrl: './stude-scan.page.html',
  styleUrls: ['./stude-scan.page.scss'],
})
export class StudeScanPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async scanBarcode() {
    const result = await BarcodeScanner.startScan();
    if (result.hasContent) {
      console.log('Scanned data:', result.content);
    } else {
      console.error('No barcode data found.');
    }
  }

}
