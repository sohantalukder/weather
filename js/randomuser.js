const randomUser = () => {
    const url = `https://randomuser.me/api/`;
    fetch(url)
        .then(res => res.json())
        .then(data => dispalyUser(data.results));
}
randomUser();

const dispalyUser = datas => {
    console.log(datas);
    datas.forEach(eachData => {
        const col = document.getElementById('col');
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `<img src="${eachData.picture.medium}" class="card-img-top rounded-circle w-75 mx-auto mb-3 mt-3" alt="..." />
         <div class="card-body">
         <h5 class="card-title"> ${eachData.name.title} ${eachData.name.first} ${eachData.name.last}</h5>
         <p class="card-text">
         ${eachData.location.city} 
        </p>
        <span>
        ${eachData.location.state}</span>
        <p class="card-text"></p>
        </div>
        `;
        col.appendChild(div);
    });
    
}