//&& =>last truthy and first falsy
//|| =>first truthy and last falsy
// null,undefinded,false,0,'',Nan====>falsy

// console.log(5 && 1 && 3);
// console.log(5 && false && 3);
// console.log(false || "" || null || 2);
// console.log(1 || false || "" || null || 2);

// console.log(3 > 2 > 1); //false ==>true==1 && false==0
// console.log(1 < 2 < 3); //true

// console.log(undefined == null); //both are false but type is different
// console.log(undefined === null);

// console.log(String(100));
// console.log(String(true));
// console.log(String(null));
// console.log(String(undefined));

// console.log(Number("123")); //123
// console.log(Number("ali")); //nan
// console.log(Number(true)); //1
// console.log(Number(undefined));//nan
// console.log(Number(null));//0
// console.log(Number(""));//0
// console.log(Number("123abs"));//nan

// let n = "231";
// console.log(+n);//231
// let m = "231m";
// console.log(+m);//nan

// console.log(parseFloat("123.32"));   //123.32
// console.log(parseFloat("123.32mn"));  //123.32
// console.log(parseFloat("mn123.32"));  //nan

// console.log(parseInt("123")); //123
// console.log(parseInt("123nm")); //123
// console.log(parseInt("nm123")); //nan

// console.log(Boolean(0));//f
// console.log(Boolean(""));//f
// console.log(Boolean(null));//f
// console.log(Boolean(undefined));//f
// console.log(Boolean(1));//t
// console.log(Boolean("32131"));//t

// console.log("abc" + undefined);
// console.log("abc" + NaN);

let x = 0;
if (x++) console.log("ali");
else if (x == 0) console.log("faizan");
else console.log("koi ni");
