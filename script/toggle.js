document.getElementById('cash-out').style.display="none";
document.getElementById('transaction-history').style.display="none";

document.getElementById('add-money-box')
.addEventListener('click',
    function(){
        document.getElementById('cash-out').style.display="none";
        document.getElementById('transaction-history').style.display="none";
        
        document.getElementById('add-money').style.display="block";
    }
)

document.getElementById('cash-out-box')
.addEventListener('click',
    function(){
        document.getElementById('cash-out').style.display="block";
        document.getElementById('add-money').style.display="none";
        document.getElementById('transaction-history').style.display="none";

    }
)

//handle history
document.getElementById('transaction-box')
.addEventListener('click',
    function(){
        document.getElementById('transaction-history').style.display="block";
        document.getElementById('cash-out').style.display="none";
        document.getElementById('add-money').style.display="none";

    }
)

//log out btn
document.getElementById('log-out-btn')
.addEventListener('click',
    function(event){
        event.preventDefault();
        window.location.href="index.html"
    }
)


