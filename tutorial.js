console.log('hello')

//------------------------------------------------------------------

var id = 1
var name = `pol id=${id}`
var array ={
    code: '001',
    name: 'pol'
}
array.age = 26
array['age'] = 27
delete array.age

console.log(array.code)
console.log(array['name'])

//------------------------------------------------------------------

var list = ['a' ,'b' , 'c' ,'d'] //0 |a| 1 |b| 2 |c| 3 |d|
list.pop()
console.log(list)
list.push('e')
console.log(list)
list.shift()
console.log(list)
list.unshift('z')
console.log(list)
list.splice(1,2) //delete position array 1 on 2 value
console.log(list)
list.splice(1,0,'w','x','y') // add 3 value on position array 1
console.log(list)

console.log(list.length)

list.splice(list.length,0,'f') // equal push('f')
console.log(list)
list.splice(list.length-1,1) // equal pop
console.log(list)
list.splice(0,1) // equal shift == delete first position
console.log(list)
list.splice(0,0,'g','h') //equal unshift == add first position
console.log(list)

//------------------------------------------------------------------

var student1 = {id: 1}
var student2 = JSON.parse(JSON.stringify(student1)) // clone array
student2.id = 2
console.log(student1,student2)

//------------------------------------------------------------------

/*var i = 0 
var t = setInterval(function(){ // delay
    console.log('i = ', i)
    i++
    if(i === 3){
        clearInterval(t)
    }
}, 1000)*/

//------------------------------------------------------------------




