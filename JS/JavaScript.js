/*document.write("Hello world!")
let text = 'hello';
let planet_name ='Земля';
let user_name = 'Василь'
alert(planet_name)
alert(user_name)
let user; let name;
name = 'Вячеслав';
user = name;
alert(user)*/

/*let a,b,c,d,e;
a= ' Де'
b= ' є'
c= ' життя'
d= ' там'
e= ' є надія'
alert(a+b+c+d+e)*/



/*let userName=prompt("What is your name"," Maria")
alert("Hello dear"+userName+"!")
let isDiscount = confirm("Знижку?");
if(isDiscount==true){
    alert("Welcome")
}else{
    alert("Goodbye")
}*/


/*let spaceYear = prompt('В якому році був здійснений пеший політ у космос', '');
if (spaceYear!= 1961) {
    alert('Ви помилилися. ');
    alert( 'Перший політ в космос був в 1961 році!');
}else {
 alert('Ви молодець!')
}*/


/*let spaceYear = prompt('В якому році був здійснений перший політ людини у космос? ', '');
if (spaceYear ==null) {
     alert( 'До побачення!' );
    } else if (spaceYear< 1961) {
 alert( 'Та ні, це щось дуже рано!' );
} else if (spaceYear > 1961) {
 alert( 'О ні, в цей час вже багато хто політав!' ); 
} else if (spaceYear == 1961){
 alert( 'Так, Ваша відповідь правильна!' );
}else{
    alert('Ви ввели не число')
}*/

//квадратне рівняння
let a = +prompt('Старший коефіцієнт')
let b = +prompt('Другий коефіцієнт')
let c = +prompt('Вільний член')
let D = b**2-4*a*c
let x = -b/2*a
let x1 = (-b+Math.sqrt(D))/2*a
let x2 = (-b-Math.sqrt(D))/2*a
if (D<0) {
 alert('Коренів немає')
}else if(D==0){
 alert('Корінь рівняння дорівнює '+x)
}else{
    alert(`Рівняння має два корені: x1=${x1}; x2=${x2}`)
}
/*1; -5; 6 -два корені
4; 4; 1 - один корінь
3; 2; 1 - немає коренів*/



//JS.5
/*let number=+prompt("Число")
        if(number>100){
            alert("значення більше ста")
        }else if(number<100){
            alert("значення менше ста")
        }else{
            alert("100")
        }*/

/*let answer; 
let inputN = +prompt("Введіть число від 1 до 50","");
let questN = +prompt("Вгадайте число від 1 до 50","");
if(questN > inputN){answer="Ваше число більше"};
if(questN < inputN){answer="Ваше число менше"};
if(questN == inputN){answer="Ви Вгадали!"}; 
alert(answer);*/



/*let age =+prompt('Ваш вік','');
if(age>=18 && age<=100){
    alert('Вхід дозволено')
}else{
    alert('Вхід заборонено')
}*/


//JS.6
/* let count = +prompt('Скільки буде 2*2?', 0); 

switch (count) {
   case 4:
    alert( 'Правильно!' );
    break;
  case 3:
  case 5:
    alert( 'Невірно!' );
    break;
  default:
    alert( 'Я не вмію рахувати' );
}*/



/*let countX =+prompt('Введіть число від 5 до 10?','')
switch(countX){
    case 5:
        alert(5);
        break;
    case 6:
        alert(6);
        break;
        case 7:
        case 8:
        case 9:
        alert('7 або 8 або 9');
    break;
        default:
            alert( 'Я не вмію рахувати' );
}*/



/*let numberX = prompt('Введіть число від 1 до 5',1);
switch (numberX) {
  case '1':
  case '2':
    alert( 'Один' );
    alert( 'Два' );
    break; 
  case '3':
    alert( 'Три' );
    break; 
  case 4:
    alert( 'Ви впевненні?' );
    break; 
  case '5':
    alert( 'Крайнє значення : 5' );
    break; 
  default:
    alert('Інші значення: ' + numberX);
}*/



/*
let a=+prompt("Довжина першої сторони трикутника")
let b=+prompt("Довжина другої сторони трикутника")
let c=+prompt("Довжина третьої сторони трикутника")
let p=(a+b+c)/2
let P=a+b+c
let S=Math.sqrt(p*(p-a)*(p-b)*(p-c))
if((a+b)>c && (b+c)>a && (a+c)>b && a>0 &&b>0 &&c>0 ){
document.write("Площа трикутника дорівнює "+S+"<br>")
document.write("Периметр трикутника дорівнює "+P)}
else{
    document.write("Такого трикутника не існує")
}*/

//JS.7
/* let count = 0;
       let number= +prompt("How many greetings do you want?",1000)
        for (count = 1; count <= number; count++){
            document.writeln(count+". Glory to ukraine"+"<br/>");
        }
        document.write("Glory to Heroes "+count+"times!")*/


      /*  let min=+prompt("Enter min",0)
        let max=+prompt("Enter max", 0)

        for( let count = min; count<= max; count++){
            if( count%2==0){
                document.writeln(count);
        }
    }*/

        /*let min=+prompt("Enter min",0)
        let max=+prompt("Enter max", 0)
        let sum=0;
        for( let i = min; i<= max; i++){
          sum = sum+i;
        }
        document.write(`Сума чисел в діапазоні ${min} до ${max}  дорівнює ${sum}`)*/

        /*let sum = 0;
while (true) {
  let value = +prompt('Введіть число', '');
  if (!value) break; 
  sum += value;
}
alert( 'Сума: ' + sum );*/

/*let number;
do{
    number=prompt("Введіть число, більше 100",0);
}while (number <= 100 && number!=null);
if(number===null){
    alert("До побачення!")
}else{
    alert
("Ваше число: "+ number)
}*/


/* let count = 0;
       let number= +prompt("Hoe many greetings do you want?",1000)
        for (count = 1; count <= number; count++){
            document.writeln(count+". Glory to ukraine"+"<br/>");
        }
        document.write("Glory to Heroes "+count+"times!")*/


      /*  let min=+prompt("Enter min",0)
        let max=+prompt("Enter max", 0)

        for( let count = min; count<= max; count++){
            if( count%2==0){
                document.writeln(count);
        }
    }*/

        /*let min=+prompt("Enter min",0)
        let max=+prompt("Enter max", 0)
        let sum=0;
        for( let i = min; i<= max; i++){
          sum = sum+i;
        }
        document.write(`Сума чисел в діапазоні ${min} до ${max}  дорівнює ${sum}`)*/




        /*let sum = 0;
while (true) {
  let value = +prompt('Введіть число', '');
  if (!value) break; 
  sum += value;
}
alert( 'Сума: ' + sum );*/




/*let number;
do{
    number=prompt("Введіть число, більше 100",0);
}while (number <= 100 && number!=null);
if(number===null){
    alert("До побачення!")
}else{
    alert
("Ваше число: "+ number)
}*/
