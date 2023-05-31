let completedTask =[]
let tt =[]
let tt2=[]

let cht =()=>{
   if(Array.from(document.querySelector(".tasks").children).length == 0){
     let p = document.createElement("p")
     p.innerText = "No Tasks Yet......."
     document.querySelector(".tasks").append(p)
   }
   else{
     let p = document.querySelector(".tasks p")
     if(p){
       p.remove()
     }
   }
     
}
let removeTsk =(id)=>{
  
  let rt = tt.find(e=>{
    return e.id == id
  });
  let remt =[rt]
  

  tasklist(remt,".doneTasks","Completed",true)
  let nt = tt.filter(e=>{
    return e.id != id
  })
 
  
 Array.from(document.querySelector(".tasks").children).forEach(e=>e.remove())
  tasklist(nt,".tasks","Done",false)
  
  tt = nt
  cht()
}

const tasklist =(t,key,btnval,dv)=>{
  
  if(t.length >0)
  {
 let tsk= t.map(e=>{
  let div = document.createElement("div")
  div.setAttribute("class","task")
  let html =`<div>
          ${e.value}
        </div>
        <div>
          <button class='addbtn' type="" ${dv?"disabled":""}  onclick = removeTsk(${e.id})>${btnval}</button>
        </div>`
        
        
        div.innerHTML = html
       
        return div
    
  })

  tsk.forEach(e=>{
    document.querySelector(key).append(e)
  })
  }
  
}


let addTask =()=>{
  
let addTasks =[]
  let inp = document.querySelector("input")
  if(inp.value){
  let t ={
    id : new Date().getTime().toString(),
    value:inp.value
  }
 
  addTasks.push(t)
  tt.push(t)
  
  tasklist(addTasks,".tasks","Done",false)
  
  inp.value =""
  b()
  }
  
cht()
}


let addbtn = document.getElementById("addbtn")


addbtn.addEventListener("click",addTask)


const b = ()=>{
  let i = document.querySelector("input")
  let addbtn = document.getElementById("addbtn")
addbtn.disabled = i.value.length>0?false:true
}

let i = document.querySelector("input")
i.addEventListener("input",b)

cht()