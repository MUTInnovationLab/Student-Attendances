import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-qr-scan',
  templateUrl: './qr-scan.page.html',
  styleUrls: ['./qr-scan.page.scss'],
})
export class QrScanPage implements OnInit {
  qrCodeDataUrl: string = '';
  qrCodeText: string = 'This is a secret qr code message';
  qrCodeSize: number = 200;
  scannedResult: any;
  content_visibility = '';

  constructor() {this.startQRCodeGenerationInterval(); }
  ngOnInit() {}

  async generateQRCode() {
    try {
      this.qrCodeText= this.qrCodeText;
      this.qrCodeText= this.qrCodeText +"-" +Date.now();
      this.qrCodeDataUrl = await QRCode.toDataURL(this.qrCodeText, {
        width: this.qrCodeSize,
        margin: 1,
      });
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  }

  startQRCodeGenerationInterval() {
    this.generateQRCode();

    setInterval(() => {
      this.generateQRCode();
    }, 7000);
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
