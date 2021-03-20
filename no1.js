const biodata = {
    name: 'Rifqi Ziyad Imtinan',
    age: 19,
    hobbies: ['Badminton', 'Video Games'],
    isMarried: false,
    schoolList: [
        {
            name: 'MI Nurul Ghasiyah',
            yearIn: 2007,
            yearOut: 2013,
            marjor: undefined
        },
        {
            name: 'MTs Khazanah Kebajikan',
            yearIn: 2013,
            yearOut: 2016,
            major: undefined
        },
        {
            name: 'MA Khazanah Kebajikan',
            yearIn: 2016,
            yearOut: 2019,
            major: 'Ilmu Pengetahuan Alam'
        }
    ],
    skills: [
        {
            HTML: 'beginner',
            CSS: 'begginer', 
            javascript: 'beginner',
            PHP: 'beginner'
        }
    ],
    interestCoding: true
}

console.log(biodata.schoolList[0].name)

