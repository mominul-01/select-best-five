
document.getElementById('btn-players-cost').addEventListener('click',function () {
    
    const player = 5;
   
    const playerCostAmount = getElementByIdValue('per-player-cost');

    const playerExpenses = player * playerCostAmount;

    setText('player-expenses', playerExpenses);

})


document.getElementById('btn-calculate-total').addEventListener('click', function () {
   
    const playerExpenses = getTextValue('player-expenses');
    const managerCost = getElementByIdValue('manager-cost');
    const coachCost = getElementByIdValue('coach-cost');

    const totalCost = playerExpenses + managerCost + coachCost;

    setText('final-total', totalCost);
})

