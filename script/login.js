document.getElementById('login-btn')
.addEventListener('click',
    function(event){
        event.preventDefault();
        console.log('btn clicked');
        const accountNumber =document.getElementById('Account-number').value;
        console.log(accountNumber);

        const pin=document.getElementById('pin').value;
        console.log('pin',pin);
        if(accountNumber.length===11){
            if(pin==='1234'){
                //console.log("ok. right");
                window.location.href="main.html"
            }
            else{
                alert("pin is invalid")
            }
        }
        else{
            alert("Give valid account number")
        }
    }   
)

