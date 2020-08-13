# Appathon@Ntua Project

## Αρχική Περιγραφή Θέματος

Το project θα δίνει τη δυνατότητα στο χρήστη να επιλέξει μια στάση λεωφορείου, να δει τις διαθέσιμες διαδρομές που περνάνε από αυτή και να δει την διαδρομή σε ένα χάρτη. Συγκεκριμένα, θα δίνεται η δυνατότητα στον χρήστη να επιλέξει από ενα dropdown menu αρχικά τη στάση. Στη συνέχεια από τη στάση αυτή θα επιλέγει κάποια διαδρομή που επιθυμεί και θα εμφανίζεται σε μορφή σημείων στο χάρτη, αλλά και σε συνεχόμενη γραμμή.

Εναλλακτικά, θα μπορεί να γίνει εντοπισμός των κοντινότερων στάσεων στο χρήστη, αφού αυτός επιλέξει την τοποθεσία του, ώστε να επιλέξει μεταξύ αυτών.

Θα χρησιμοποιηθούν τα αντίστοιχα Web services που παρέχονται για τα μεταφορικά μέσα. Συγκεκριμένα, από τα endpoints του API: http://feed.opendata.imet.gr:23577/itravel, λαμβάνεται η πληροφορία για τα devices και paths. Αντίστοιχα, θα χρησιμοποιηθούν κάποιοα από τα πρώτα 6 Web Services.

Η υλοποίηση θα γίνει με Javascript, ενώ το front-end συγκεκριμένα θα υλοποιηθεί με React JS. Ο χάρτης θα υλοποιηθεί module Leaflet-React.

## Οδηγίες Εγκατάστασης/Εκτέλεσης

Για τη σωστή λειτουργία της εφαρμογής, απαιτείται να είναι εγκατεστημένο το [Node.js](https://nodejs.org/en/) και να υπάρχει σύνδεση στο Internet. Για την εγκατάσταση και εκτέλεση της εφαρμογής, ακολουθήστε τα παρακάτω βήματα.

1. Αντιγράφετε το repository σε ένα φάκελο μέσω της εντολής :

```
https://github.com/kostasvos37/appathon-ntua-project.git
```

2. Μεταφέρεστε στο φάκελο αυτό και κάνετε εγκατάσταση των Node js modules μέ την εντολή :

```
npm install
```

3. Αφού ολοκληρωθεί η εγκατάσταση, εκκινείτε την εφαρμογή με την εντολή :
```
npm start
```

## Τεχνολογίες Εφαρμογής

**Γλώσσες**
- HTML
- CSS
- Javascript

**Βιβλιοθήκες/Frameworks**
- React.js
- Leaflet
- Bootstrap
- React-router
- geolib
