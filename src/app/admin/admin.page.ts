import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  fullName: string = '';
  staffNumber: string = '';
  email: string = '';
  position: string = '';
  department: string = '';


  constructor(private afs: AngularFirestore,private loadingController: LoadingController) { }

  ngOnInit() {
  }

  async submitForm() {
    const loader = await this.loadingController.create({
      message: 'Submitting...',
      cssClass: 'custom-loader-class',
    });
    await loader.present();

    try {
      const data = {
        fullName: this.fullName,
        staffNumber: this.staffNumber,
        email: this.email,
        position: this.position,
        department: this.department,
      };

      await this.afs.collection('lecturer').add(data);

      // Clear the input fields
      this.fullName = '';
      this.staffNumber = '';
      this.email = '';
      this.position = '';
      this.department = '';

      loader.dismiss();
      alert('Information successfully saved');
    } catch (error) {
      loader.dismiss();
      console.error('Error saving data:', error);
      alert('An error occurred while saving the information.');
    }
  }

}
