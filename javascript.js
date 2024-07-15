//1)
let a=100;
for(i=1;i<=a;i++)
{
    if(i%3==0 && i%5==0)
        console.log("FizzBuzz");
    else if(i%3==0)
        console.log("Fizz");
    else if(i%5==0)
        console.log("Buzz");
    else
        console.log(i);
}

//2)

function palin(str){
    let str1="";
    for(let i=str.length;i>=0;i--)
    {
        str1+=str[i];
    }
    if(str==str1)
        return "Palindrome";
    else
        return "Not a Palindrome"
    
}
console.log(palin("Queen"));

//3)
function arr(b){
    let val=0;
    let j;
    for(j=0;j<a.length;j++)
    {
        if(b[j]>=val)
            val=b[j];
    }
    return val;
}
let b=[10,20,30,40,50];
console.log(arr(b));

//4)
function occ(l){
    let result={}
    for(let m=0;m<l.length;m++){
        let ch=l.charAt(m)
    
    if(!result[ch])
        result[ch]=1;
    else
        result[ch]+=1
    }
    return result;
}
console.log(occ("I am a dancer"));

//5)
function word(str){
    str=str=str.split(" ")
    return str.sort((a,b)=>b.length-a.length)[0];
}
console.log(word("I am IT Proffession"));


//6)
function fact(n){
    let i;
    let ans=1;
    for(i=1;i<=n;i++){
        ans=ans*i;
    }
    return ans;
}
console.log(fact(5))

//7)
function temp(cel){
    return ((9/5)*cel+32);   
}
console.log(temp(30));

//8)
let arr=[0,1,3,4,5,6];
let y=arr.length;
let sum=0;
let n;
for(n=0;n<=y;n++){
    sum=sum+n;
}
let sum1=0;
let z;
for(z=0;z<y;z++){
    sum1=sum1+arr[z];
}
console.log(sum-sum1);