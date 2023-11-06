import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController } from '@ionic/angular';
import { AlertController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.page.html',
  styleUrls: ['./lecture.page.scss'],
})
export class LecturePage implements OnInit {
  showAddCard: boolean = false;
  

  contact_nom: string = '';
  contact_email: string = '';
  contact_sujet: string = '';
  contact_message: string = '';

  moduleName: any;
  moduleCode: any;
  moduleLevel:any;



  constructor(private navCtrl: NavController,
    private loadingController: LoadingController,
    private auth: AngularFireAuth,
    private db: AngularFirestore,
    private alertController: AlertController,
    private toastController: ToastController) { }

  ngOnInit() {
  }
  async addModule() {
    const loader = await this.loadingController.create({
      message: 'submitting...',
      cssClass: 'custom-loader-class',
    });
    await loader.present();
  
    try {
      await this.db.collection('lecturer').add({
        moduleName: this.moduleName,
        moduleCode: this.moduleCode,
        moduleLevel: this.moduleLevel,
      });
  
      // Clear the input fields
      this.moduleName = '';
      this.moduleCode = '';
      this.moduleLevel = '';
  
      loader.dismiss();
      alert('Information successfully saved');
    } catch (error) {
      loader.dismiss();
      console.error('Error saving data:', error);
      alert('An error occurred while saving the information.');
    }
  }
  

}
