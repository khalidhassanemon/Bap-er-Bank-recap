document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField=document.getElementById('deposite-field');
    const newDepositAmountString=depositField.value;
    const newDepositeAmount=parseFloat(newDepositAmountString);

    depositField.value='';


    //Get the previous deposit totall field
    const DepositTotalElement=document.getElementById('deposit-total');
    const previousDepositeTotallString=DepositTotalElement.innerText;
    const previousDepositeTotall=parseFloat(previousDepositeTotallString);


    const newDepositTotall=previousDepositeTotall+newDepositeAmount;

    DepositTotalElement.innerText=newDepositTotall;


    const balanceTotalElement=document.getElementById('balance-total');
    const previousBalanceTotallString=balanceTotalElement.innerText;
    const previousBalanceTotallAmount=parseFloat(previousBalanceTotallString);

    const newBalanceTotal=previousBalanceTotallAmount+newDepositeAmount;

    balanceTotalElement.innerText=newBalanceTotal;
})