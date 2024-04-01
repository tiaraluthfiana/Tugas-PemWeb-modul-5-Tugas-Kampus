// Memilih elemen button dan h1 menggunakan ID
let myButton = document.getElementById('myButton');
let myH1 = document.getElementById('myH1');

// Menambahkan event listener untuk button
myButton.addEventListener('click', function() {
    // Ketika button diklik, ubah teks h1
    myH1.textContent = 'Tombol sudah diklik!';
});
