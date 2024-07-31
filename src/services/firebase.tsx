import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import 'firebase/analytics';
import { getAnalytics } from 'firebase/analytics';

// Configurações do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCLNRhky8snqJ4QXB31Sa9sIvD3DiIkBwo",
    authDomain: "schoolish-official.firebaseapp.com",
    projectId: "schoolish-official",
    storageBucket: "schoolish-official.appspot.com",
    messagingSenderId: "510922615291",
    appId: "1:510922615291:web:cf12894c2209f700b9435e",
    measurementId: "G-N0JH48SBJX"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const hooks = {
    getUserData: () => auth.currentUser || null
}