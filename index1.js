
function atualizar(){

    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = Number(document.getElementById('tipInput').value)
    let split = document.getElementById('splitInput').value
    let tipValue = bill * (tipPercent / 100)
    let billTotal = bill + tipValue
    let billEach = (billTotal / split)

    document.getElementById('tipPercent').innerHTML = (tipPercent + ' %')
    document.getElementById('tipValue').innerHTML = 'R$ ' + tipValue
    document.getElementById('totalWithTip').innerHTML = 'R$ ' + billTotal
    document.getElementById('splitValue').innerHTML = split
    document.getElementById('billEach').innerHTML = 'R$ ' + billEach

}
