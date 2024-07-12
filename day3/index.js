var age=10
if(age<18)
    {
        console.log('u r not eligible for license')
    }
else if(age==18)
    {
        console.log('u r eligible for license')
    }
else{
    console.log(`u r eligible for license`)
}

//switch statement
var fruit='mango'
switch ('mango') {
    case 'apple':
        console.log('Apple')
        break;
    case 'mango':
        console.log('mango')
        break;
    case 'orange':
       console.log('orange')     
        break;    
    default:
        break;
}

//logical operator && || !
var myAge=18;
var myName='ali'
var myid=1
if(myAge>=18 && myName=='ali'&& myid==1 )
    {
        console.log('eligible for license')
    }
    else{
        console.log('not eligible for license')
    }
    if(myAge>=18 || myName=='mohd'|| myid==2 )
        {
          console.log('eligible for license')
        }
         else{
            console.log('not eligible for license')
        }

console.log(10>20 && 30<40 && 40>50)
console.log(10>20 || 30<40 || 40>50)
