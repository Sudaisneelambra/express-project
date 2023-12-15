
function subbed(l){
    console.log("manjery");
    l.preventDefault()
    let email=document.getElementById('username').value
    let pass=document.getElementById('password').value
    console.log(email);
    console.log(pass);

    if(!username ||!password)
    {
        const love=document.getElementById('loggined')
        love.innerText="enter the values"
    }
    else
    {
        let email=document.getElementById('username').value
        let pass=document.getElementById('password').value
        const jsonData = JSON.stringify({email, pass});

        fetch('/login',{method:'POST', body: jsonData,headers:{
            'content-Type':'application/json'
        }}).then((e)=>e.json()).then((re)=>{
            if(re.status===true)
            {
                location.href=re.url
            }
            else{
                const kinan=document.getElementById('kinan')
                kinan.innerText=re.message
                console.log("manjappetty");
            }
            
        })
    }
 


}