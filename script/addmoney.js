document.getElementById('add-money')
.addEventListener('click',
    function(event){
        //console.log('a');
        event.preventDefault();
        const amount = document.getElementById('amount').value;
       // console.log(typeof amount);
       //convert amount string to number
       const convertAmount = parseFloat(amount);
       const pin=document.getElementById('pin').value;
       const mainBalance= document.getElementById('main-balance').innerText;
       //console.log(typeof mainBalance);
       //convert main balance
       const convertedMainbalance =parseFloat(mainBalance);
       if(pin==='1234'){
            //console.log('add kora jabe');
            const sum=convertedMainbalance+convertAmount;
            //console.log(sum);
            document.getElementById('main-balance').innerText=sum;
       }
       else{
        alert('Invalid Pin');
       }
    }
)