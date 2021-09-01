document.getElementById('error-text').style.display = 'none';

const taggleSpinner = displayStyle => {
  document.getElementById('spinner').style.display = displayStyle;
}
const taggleContainer = displayStyle => {
  document.getElementById('containerWeather').style.display = displayStyle;
}

const searchbtn = async () => {
    const searchFiled = document.getElementById('search-field');
    const searchText = searchFiled.value;
    searchFiled.value = '';

    const url = `https://api.weatherapi.com/v1/current.json?key=7489c7043a2747328d255557212808&q=${searchText}`;
  taggleSpinner('block');
  taggleContainer('none');
    try {
        
        const res = await fetch(url);
        const data = await res.json();
        displayWeather(data);
        // console.log(data)
        document.getElementById('containerWeather').style.display='block';
        document.getElementById('error-text').style.display = 'none';
    }
    catch (error) {
        document.getElementById('containerWeather').style.display='none';
        document.getElementById('error-text').style.display = 'block';
    }
}


const displayWeather = data => {
  taggleSpinner('none');
  taggleContainer('block');
    const containerWeather = document.getElementById('containerWeather');
    containerWeather.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `<h1
    id="location"
    class="
      text-center text-3xl
      tracking-wide
      font-bold
      text-indigo-400
      mb-3
    "
  >
    ${data.location.name}, ${data.location.country} 
  </h1>
  <div class="flex justify-center items-center">
    <img src="${data.current.condition.icon}" class="object-contain w-20" alt="" />
    <h1 class="text-4xl font-semibold mx-4 text-gray-700">
      ${data.current.temp_c} <span>°c</span>
    </h1>
  </div>
  <h4 class="text-center text-xl mt-1 font-semibold text-gray-700">
    ${data.current.condition.text}
  </h4>
  <h5 class="text-center text-sm mt-1 font-normal text-gray-700">
    Updated Time: <span>${data.location.localtime} PM</span>
  </h5>`;
    containerWeather.appendChild(div);
};