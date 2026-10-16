// //Task 1
console.log('Завдання 1');
function f(x){
    return (Math.cos(2*x)/(x+2));
}
//а) табулювання на відрізку
let a =0, b=1.5, dx=0.15;
for(let x = a; x<=b+1e-9; x+=dx){
    console.log(`x = ${x.toFixed(3)}, y = ${f(x).toFixed(5)}`);
}
//б) n значень, починаючи з x0
let x0=0.5, dx2=0.1, n=6;
let x = x0;
let count = 0;
while (count<n){
    console.log(`x= ${x.toFixed(2)}, y = ${f(x).toFixed(5)}`);
    x+=dx2;
    count++;
}

//Task 2
console.log('Завдання 2');
function term (i){
    return Math.sin(Math.PI * i / 4) / (i + 2);
}
function factor (j){
    return (j - 2) / (j + 4);
}

console.log('Сума: ');
let S=0;
for (let i = 0; i<=6; i++){
    S+=term(i);
}
console.log ('S=', S);

console.log('Добуток: ');
let p =1;
for(let j=3; j<=9; j++){
    p*=factor(j);
}
console.log ('p=', p);



//Task 3
console.log('Завдання 3');
const M = [2.3, -1.1, -4.4, 5.5, 0.0, -2.2, 3.3];
console.log('Номери відємних алементів: ');
for (let i =0; i<M.length; i++){
    if(M[i]<0){
        console.log('Номер: ', i+1, 'значення: ', M[i]);
    }
}

//Task 4
console.log('Завдання 4');
const employees = [
{
    name: "Галушко Євдокія Тарасівна",
    rank: "Frontend-developer",
    id: "E-001",
},
{
    name: "Завалішин Остап Григорович",
    rank: "QA Tester",
    id: "E-002",
},
{
    name: "Криса Аркадій Петрович",
    rank: "Backend-developer",
    id: "E-003",
},
{
    name: "Гончаренко Афанасій Іванович",
    rank: "Content-creator",
    id: "E-004",
},
{
    name: "Дорошенко Жанна Ігорівна",
    rank: "Teamlead",
    id: "E-005",
},
];
for(const employee of employees){
    console.log(
        `${employee.name} -  ${employee.rank} [${employee.id}]`
    );
}