import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as QRCode from 'qrcode';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-qr-scan',
  templateUrl: './qr-scan.page.html',
  styleUrls: ['./qr-scan.page.scss'],
})
export class QrScanPage implements OnInit {
  qrCodeDataUrl: string = '';
  qrCodeText: string = '';
  qrCodeSize: number = 200;
  scannedResult: any;
  content_visibility = '';
  moduleCode: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['moduleCode']) {
        this.moduleCode = params['moduleCode'];
        this.generateQRCode();
      }
    });
  }


    async generateQRCode() {
      try {
        this.qrCodeText = this.moduleCode;
        this.qrCodeDataUrl = await QRCode.toDataURL(this.qrCodeText, {
          width: this.qrCodeSize,
          margin: 1,
        });
      } catch (error) {
        console.error('Error generating QR code:', error);
      }
    }
}
