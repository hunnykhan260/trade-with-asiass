// firebase-messaging-sw.js
// This file MUST sit in the same root folder as index.html (not inside any subfolder).
// It lets push notifications arrive even when the site tab is closed (browser must be running).

importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

// Same config as the main site
firebase.initializeApp({
    apiKey: "AIzaSyAQy70lB4f6xODKH9SUfvzlsaWzSL9-97A",
    authDomain: "trade-with-asiass.firebaseapp.com",
    projectId: "trade-with-asiass",
    storageBucket: "trade-with-asiass.firebasestorage.app",
    messagingSenderId: "54707494147",
    appId: "1:54707494147:web:deb33f4da29b26624d5d36"
});

const messaging = firebase.messaging();

// Show notification when a push arrives while the site is not in focus
messaging.onBackgroundMessage(function (payload) {
    const title = payload.notification?.title || payload.data?.title || "Trade with Asiass";
    const body = payload.notification?.body || payload.data?.body || "";
    self.registration.showNotification(title, {
        body: body,
        icon: "logo.png"
    });
});
