import { Component, OnInit } from '@angular/core';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-qrgenerator',
  templateUrl: './qrgenerator.page.html',
  styleUrls: ['./qrgenerator.page.scss'],
})
export class QrgeneratorPage implements OnInit {
  qrCodeDataUrl: string = '';
  qrCodeText: string = 'This is a secret qr code message';
  qrCodeSize: number = 200;

  constructor() { }

  ngOnInit() {
  }
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
    }, 2000);
  }

}
