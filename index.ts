1. //Basic Types

let  id:Number = 5  //Integers
let company:string =  "EY" //Strings
let isPublished:boolean = true //Boolean
let x:any =  'Hello' //Any depends on Datatype
let age :number  // Declaration and Later Initalization
age= 5

//Array
let ids :number[] =  [1,2,3,4,5] //array of Number
ids.push(6) //Push Used to Push elements into the array

let arr: any[] = [1,true,'Hello'] //we cann have a Mixed Array

//Tuple - Tuples Store in the Datatype order that we Specify
let person:[number, string, Boolean] = [1,'Brad',true] 

let employee:[number,  string][]
employee =[
    [1,'Brad'],
    [2,'John'],
    [3,'Jill'],
]
//Union - Union can be either of the datatype
let pid:string | number 
pid = '22'

//Enum
