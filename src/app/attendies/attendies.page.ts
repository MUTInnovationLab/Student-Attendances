import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-attendies',
  templateUrl: './attendies.page.html',
  styleUrls: ['./attendies.page.scss'],
})
export class AttendiesPage implements OnInit {
  selectedDate: string = '';
  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }
  async openDatePicker() {
    const alert = await this.alertController.create({
      inputs: [
        {
          name: 'selectedDate',
          type: 'date',
          value: this.selectedDate || new Date().toISOString().substring(0, 10), // Use date format 'YYYY-MM-DD'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'OK',
          handler: (data) => {
            this.selectedDate = data.selectedDate;
          },
        },
      ],
    });

    await alert.present();
  }
}
