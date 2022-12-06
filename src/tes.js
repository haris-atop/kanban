let data=[
    {
        name:"a",
        stage:1
    },
    {
        name:"b",
        stage:2
    }
]
// console.log(data.filter(e=>e.stage==1).map(d=>{
//     return d.name
// }))

let temp=data
temp.splice(0,1)
console.log(temp)