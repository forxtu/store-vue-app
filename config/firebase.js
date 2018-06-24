import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyDGoX-TmXvAowHc2MFEk4z5eBKaHzwCKZs",
    authDomain: "store-vue-app.firebaseapp.com",
    databaseURL: "https://store-vue-app.firebaseio.com",
    projectId: "store-vue-app",
    storageBucket: "",
    messagingSenderId: "288894765022"
});

export const db = firebaseApp.database()

export const productsRef = db.ref('products')
export const attributesRef = db.ref('attributes')
export const attributesIdValueRef = db.ref('attributesIdValue')