const radioBranch = document.querySelectorAll('.kyiv-metro');
const selectStation = document.querySelector('.station-select');
for (let k = 0; k < radioBranch.length; k++) {
    radioBranch[k].onchange = function () {
        selectStation.innerHTML = '';
        for (let line in kyivStations) {
            for (let i = 0; i < kyivStations[line].length; i++) {
                if (radioBranch[k].value == line) {
                    let optionBranch = document.createElement('option');
                    optionBranch.setAttribute('value', kyivStations[line[i]]);
                    optionBranch.innerText = kyivStations[line][i];
                    selectStation.append(optionBranch);
                }
            }
        }
    }
}
