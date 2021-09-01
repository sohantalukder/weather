const searchTeam = async () => {
    const searchButton = document.getElementById('search-filed');
    const searchText = searchButton.value;
    searchText.value = '';

    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayTeam(data.teams);
}

const displayTeam = data => {
    console.log(data);
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    data.forEach(teamDetails => {
        const div = document.createElement('div');
    div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail()" class="card mt-5">
    <img src="${teamDetails.strTeamBadge}" alt="..." class="w-50 mx-auto pt-3"/>
        <div class="card-body">
          <h3 class="card-title text-center">${teamDetails.strTeam}</h3>
          
        </div>
        </div>
    `;
        searchResult.appendChild(div);
    });
}
