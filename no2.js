let mtk = 80 ,bahasaIndonesia = 90, bahasaInggris = 89, ipa = 69;
const rata_rata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;

if (typeof mtk !== "number" || typeof bahasaIndonesia !== "number" || typeof bahasaInggris !== "number" || typeof ipa !== "number") {
    console.log('Salah masukkan angka atau belum masukkan angka')
} else if(rata_rata >= 90 && rata_rata <= 100) {
    console.log(`Rata-rata = ${rata_rata} dan Grade = A`)
} else if(rata_rata >= 80 && rata_rata <= 89) {
    console.log(`Rata-rata = ${rata_rata} dan Grade = B`)
} else if(rata_rata >= 70 && rata_rata <= 79) {
    console.log(`Rata-rata = ${rata_rata} dan Grade = C`)
} else if(rata_rata >= 60 && rata_rata <= 69) {
    console.log(`Rata-rata = ${rata_rata} dan Grade = D`)
} else if(rata_rata >= 0 && rata_rata <= 59) {
    console.log(`Rata-rata = ${rata_rata} dan Grade = E`)
} else {
    console.log('Rata-rata tidak bisa lebih dari 100')
}

