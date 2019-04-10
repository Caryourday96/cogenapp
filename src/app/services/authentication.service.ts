import { Injectable, NgZone } from '@angular/core';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private firebaseService: AuthenticationService,
    private afAuth: AngularFireAuth,
    private router: Router,
    private db: AngularFirestore,
    private ngZone: NgZone) { }
  
    
  registerUser(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(
        res => resolve(res),
        err => reject(err))
    })
   }
  
   loginUser(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(
        res => resolve(res),
        err => reject(err))
    })
   }
  
   logoutUser(){
     return new Promise((resolve, reject) => {
       if(firebase.auth().currentUser){
         firebase.auth().signOut()
         .then(() => {
           console.log("Log out");
           resolve();
         }).catch((error) => {
           reject();
         });
       }
     })
   }


   userDetails(){
     return firebase.auth().currentUser;
   }
   // returns an observer promise to check if user is authenticated or not.
  // used in the auth guard to prevent navigation to certain pages
  authState(): Promise<boolean> {
    // return new promise
    return new Promise((resolve, reject) => {
      // check auth state
      this.afAuth.auth.onAuthStateChanged((user: firebase.User) => {
        // if user is authenticated, resolve promise to true
        if (user) {
          resolve(true);
        } else {
          this.ngZone.run(() => {
            this.router.navigate(['/login']);
          });
          // redirect user to signup page if not authenticated
          resolve(false);
        }
      });
    });
  }
 }
