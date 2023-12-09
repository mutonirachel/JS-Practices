// Average using prompt

let user = []; let sum = 0; let avg = 0;

for (let i = 0; i < 3; i++){
    let age = prompt("Enter Your Age");
    let userAge = Number(age);
    user.push(userAge);
    sum += user [i];
    avg = sum/ user.length;
}

alert("the average :" + avg);