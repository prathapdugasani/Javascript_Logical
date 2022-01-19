//Length greater than 5


function Length(arr) {
    for (let i = 0; i < arr.length; i++) {
         let newValue = arr[i]
        if (newValue.length < 5) {
             console.log(newValue);
        }
        
    }
}
Length(['shahsi', 'shahikunal', 'Balaji', 'sooraj', 'poo']);
