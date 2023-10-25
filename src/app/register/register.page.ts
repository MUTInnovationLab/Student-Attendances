
import { Component, OnInit } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFirestore } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  // Declare variables to store form data
  email: string="";
  name: string="";
  surname: string="";
  studentNumber: string="";
  password: string="";

  // constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore,private navCtrl: NavController) {}
  constructor(private navCtrl: NavController){}

  ngOnInit() {
  }
  register() {

    this.navCtrl.navigateForward('/home');
  }

  // Function to handle user registration
  // signUp() {
  //   // Create user with email and password
  //   this.afAuth.createUserWithEmailAndPassword(this.email, this.password)
  //     .then((userCredential: { user: any; }) => {
  //       // User registration successful
  //       const user = userCredential.user;

  //       // Save additional user data to Firestore
  //       this.saveUserDataToFirestore(user.uid);
        
  //       console.log('User registration successful:', user);
  //     })
  //     .catch((error: { message: any; }) => {
  //       console.error('Error creating user:', error.message);
  //     });
  // }

  // // Function to save user data to Firestore
  // saveUserDataToFirestore(userId: string) {
  //   const formData = {
  //     email: this.email,
  //     name: this.name,
  //     surname: this.surname,
  //     studentNumber: this.studentNumber,
  //   };

  //   // Add user data to Firestore
  //   this.firestore.collection('users').doc(userId).set(formData)
  //     .then(() => {
  //       console.log('User data added to Firestore');
  //     })
  //     .catch((error: any) => {
  //       console.error('Error adding user data to Firestore:', error);
  //     });
  // }
}

