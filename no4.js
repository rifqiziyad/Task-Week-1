const data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874"
    }, 
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
}

// a. Ubah data tersebut menggunakan spread operator
const newData = { name: 'Rifqi Ziyad Imtinan', email: 'rifqimtinan@gmail.com', hobby: 'Badminton'}

// b. Ambil data Ambilah data “street dan city” tersebut menggunakan destructuring
const {street, city } = data.address

console.log({...data, ...newData})
console.log(street)
