// async function getDatas() {
//     return "Hello World"

// }

// getDatas().then((res)=>{
//     console.log(res)
// })
function getdatas(){
    return new Promise((reslove)=>{
        setTimeout(()=>{
            console.log("Delayed Time")
    },2000)
    })
}
async function display(){
    console.log("start")
    let name=await getdatas()
    console.log("End")
}
display()
