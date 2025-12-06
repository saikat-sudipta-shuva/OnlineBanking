document.getElementById('cash-out-btn')
.addEventListener('click',
    function(event){
        //console.log('a');
        event.preventDefault();
        const cashoutAmount = document.getElementById('cashout-amount').value;
       // console.log(typeof amount);
       //convert amount string to number
       const convertCAmount = parseFloat(cashoutAmount);
       const Cpin=document.getElementById('c-pin').value;
       const mainCBalance= document.getElementById('main-balance').innerText;
       //console.log(typeof mainBalance);
       //convert main balance
       const convertedMainCbalance =parseFloat(mainCBalance);
       if(Cpin==='1234'){
            const sum=convertedMainCbalance-convertCAmount;
            //console.log(sum);
            document.getElementById('main-balance').innerText=sum;
       }
       else{
        alert('Invalid Pin');
       }
    }
)