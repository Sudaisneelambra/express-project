// const router=require("../controllers/mainControler")

let errors = false
function validation(){
    let pass=document.getElementById('password').value
    const pPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const valid = pPattern.test(pass);

    const passerror=document.getElementById('passerror')

    if(!valid)
    {
        passerror.innerText="password is not valid"
    }
    else{
        errors = true
        passerror.innerText=""
    }

}

function submitForm(e){
    e.preventDefault()
    let em=document.getElementById("email").value
    let p=document.getElementById('password').value
    let c=document.getElementById('comment')
    
    if(!em ||!p)
    {
        c.innerText="fill the blanks"
    }

    
    else if(errors){
        c.innerText=""
        let email=document.getElementById('email').value
        let pass=document.getElementById('password').value
        const jsonData = JSON.stringify({email, pass});


        fetch('/signup',{method: 'POST', body: jsonData,   headers: {
            'Content-Type': 'application/json', // Specify the content type as JSON
                                                // Add any additional headers if needed
          },}).then((res)=>res.json()).then((result)=>{
              if(result.status === true){
                location.href = result.url 
              }else{
                const passerror=document.getElementById('passerror')
                 passerror.innerText= result.message
              }
         })
    }
    else{
        c.innerText=""

    }
}

// module.exports=validation












































// function submitForm(e){
//     e.preventDefault()
    
//     if(errors){
//         let email=document.getElementById('email').value
//         let pass=document.getElementById('password').value

//         const jsonData = JSON.stringify({email, pass});
//         fetch('/signup',{method: 'POST', body: jsonData,   headers: {
//             'Content-Type': 'application/json', // Specify the content type as JSON
//             // Add any additional headers if needed
//           },}).then((res)=>res.json()).then((result)=>{
//             const passerror=document.getElementById('passerror')
//             passerror.innerText=result.message
//           })
//     }
// }
