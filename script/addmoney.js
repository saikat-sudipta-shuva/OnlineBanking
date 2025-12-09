document.getElementById('add-money-btn')
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
       
       const selectedBank=document.getElementById('allbank').value;
        console.log(selectedBank);
       //console.log(typeof mainBalance);
       //convert main balance
       const convertedMainbalance =parseFloat(mainBalance);
       if(pin==='1234'){
            //console.log('add kora jabe');
            const sum=convertedMainbalance+convertAmount;
            //console.log(sum);
            document.getElementById('main-balance').innerText=sum;
            const container=document.getElementById("transaction-container");

            
            const div = document.createElement('div');
            div.classList.add("bg-red-400")
            div.innerHTML = `
            <h1 class="text-yellow-300 m-2">Added money from ${selectedBank}</h1>
            <h3> ${convertAmount}</h3>
            
            `
            container.appendChild(div);  
       }
       else{
        alert('Invalid Pin');
       }
    }
)