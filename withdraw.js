document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField=document.getElementById('withdraw-field');
    const newWithdrawAmountString=withdrawField.value;
    const newWithdrawAmount=parseFloat(newWithdrawAmountString);

    const withdrawTotallElement=document.getElementById('withdraw-total');
    const previousWithdrawTotallAmountString=withdrawTotallElement.innerText;
    const previousTotallwithdraw=parseFloat(previousWithdrawTotallAmountString);
    const newWithdrawTotal=previousTotallwithdraw+newWithdrawAmount;

    withdrawTotallElement.innerText=newWithdrawTotal;



    const balanceElement=document.getElementById('balance-total');
    const previousBalanceTotallString=balanceElement.innerText;
    const previousBalanceTotall=parseFloat(previousBalanceTotallString);


    const newBalanceTotall=previousBalanceTotall-newWithdrawAmount;
    balanceElement.innerText=newBalanceTotall;

    withdrawField.value='';
})