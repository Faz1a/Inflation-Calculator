function inflationCalculator(){
    let inflationRate = document.querySelector('#inflationRate');
    let money = document.querySelector('#money');

    //converting string into number
    inflationRate = parseFloat(inflationRate.value);
    money = parseFloat(money.value);

    let years = document.querySelector('#years').value;
    years - parseInt(years);

    let worth = money + (money * (inflationRate / 100));

    for(let i = 1; i < years; i++){
        worth += worth * (inflationRate / 100);
    }

    worth = worth.toFixed(2);

    let newElement = document.createElement('div');
    newElement.className = 'new-value';
    newElement.innerText = `Today ${money} euro value is same as ${worth} euro value in ${years} years.`;

    document.querySelector('.container').appendChild(newElement);

}