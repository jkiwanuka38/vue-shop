import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCttjx0ZEou_r8FfSN2FJYsSAlien_ENEs",
    authDomain: "vue-shop-872b8.firebaseapp.com",
    databaseURL: "https://vue-shop-872b8.firebaseio.com",
    projectId: "vue-shop-872b8",
    storageBucket: "vue-shop-872b8.appspot.com",
    messagingSenderId: "950993512388",
    appId: "1:950993512388:web:f5b301e3957d6b56"
};

// Initialize Firebase
export const fb = firebase.initializeApp(firebaseConfig);