let d = document.getElementById("date")
let m = document.getElementById("month")
let y = document.getElementById("year")

let result = document.getElementById("result")
let msg = document.getElementById("msg")
let current = new Date() 

result.style.display = "none"

let currday = current.getDate()
let currmon = current.getMonth()+1
let curryear = current.getFullYear()

let onSubmit=()=>{
    if(d.value=="" || m.value=="" || y.value==""){
        if(d.value==""){
            msg.innerHTML = ` Please input valid data for Date field.`
        }
        if(m.value==""){
            msg.innerHTML = ` Please input valid data for Month field.`
        }
        if(y.value==""){
            msg.innerHTML = ` Please input valid data for Year field.`
        }
        if(d.value=="" && m.value==""){
            msg.innerHTML = ` Please input valid data for Date and Month field.`
        }
        if(d.value=="" && y.value==""){
            msg.innerHTML = ` Please input valid data for Date and Year field.`
        }
        if(m.value=="" && y.value==""){
            msg.innerHTML = ` Please input valid data for Month and Year field.`
        }
        if(y.value=="" && d.value==""){
            msg.innerHTML = ` Please input valid data for Date and Year field.`
        }
        if(m.value=="" && y.value=="" && d.value==""){
            msg.innerHTML = ` Please input valid data for Date, Month & Year field.`
        }
       
        result.style.display = "block"
    
        return 
    }
    let day = currday<d.value?d.value-currday:currday-d.value
    let mon = currmon<m.value?m.value-currmon:currmon-m.value
    let yea = curryear<y.value?y.value-curryear:curryear-y.value
    msg.innerHTML = ` Your Age is ${yea} Years ${mon} Months ${day} Days.`
    result.style.display = "block"

}
