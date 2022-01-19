const obj = [
    {
        name: 'Prathap',
        age : '24'
    },
    {
        name: 'rupali',
        age :'23'
    },
    {
        name: 'omkar',
        age : '23'
    }
]

var update = obj[1].name ='vishal'
console.log(obj)

var filter = obj.filter((val, ind) => {
    if (val.name == 'Prathap') {
        return val
    }
})
console.log(filter);

var Delete = delete obj[2];
console.log(Delete);