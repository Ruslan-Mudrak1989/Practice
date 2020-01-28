function selector(array, select) {
    for (let i = 0; i < array.length; i++) {
        let cityOption = document.createElement('option');
        cityOption.textContent = array[i].name;
        cityOption.setAttribute('value', array[i].name);
        select.append(cityOption);
    }
}

selector(cities, choiceCity);