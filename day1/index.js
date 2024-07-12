// console.log('awdiz')
// console.log("awdiz")
// console.log(typeof ('awdiz'));
// console.log(typeof (20));

// // 1.string
// console.log(typeof(`awdiz`))
// // 2.number
// console.log(typeof(24))
// console.log(typeof('24'))
// //3.boolean
// console.log(typeof(true))
// console.log(typeof(false))
// //4.variables

// var name='ali'
// var age=24
// var email='nldnl@gmail.com'
// var password='1223'
// var user;
// console.log(name,age,email,password,user)
// console.log(typeof(user))

// var num1=12
// var num2=25
// console.log(num1+num2)
// console.log(num1*num2)
// console.log(num1-num2)
// console.log(num1/num2)
// console.log(num1%num2)


// var mynum=10 //assign and declare
// mynum=20 //reassign
// console.log(mynum)
// var mynum=30//redecalre
// console.log(mynum)

// let myno=50;//assign and declare
// myno=60;//reassign
// console.log(myno)
// // let myno   //cannot redecalre

// const urno=80;//asign and declare
// urno=100; //canot reassign 
// // const urno //cannot redeclare


//block scope of let and const

{
    let myName='ali'
    var myAge=24
    console.log(myName)
    console.log(myAge)
}
// console.log(myName)  //block scope of let
console.log(myAge)


{
    var user='mohd'
    let userAge=20
    {
        let userAge=10 //cannot acces userage as let has block scope
    }
    console.log(userAge)
}