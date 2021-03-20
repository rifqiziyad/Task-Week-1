const printSegitiga = 5;
let hasil = '';

for(let baris = printSegitiga; baris > 0; baris--) {
    for(let angka = 1; angka <= baris; angka++ ) {
        hasil += angka;
    }
    hasil += '\n';
}
console.log(hasil)

