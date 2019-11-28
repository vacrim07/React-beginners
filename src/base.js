import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyB7mVlJBci8sVFnl_qd19HVU7B78NtuPZE",
        authDomain: "catch-of-the-day-cc046.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-cc046.firebaseio.com"
    }
)

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;