/*var request = new XMLHttpResquest();

request.open('GET', 'https://reqres.in/api/users/2');

request.onload = function(){
    var response = request.response;
    var parsedData = JSON.parse(response);
    console.log(parsedData);
}

request.send(); */





fetch('https://reqres.in/api/users/2')
.then(
    function (response){
        return response.json();
    })
.then(
    function(data){
        console.log(data);
        showInfo(data);
        showAvtr(data);
    })

function showInfo(data){
    const info = document.querySelector('#info');
    const mainInfo = document.createElement('label');
        mainInfo.innerText =" " + data.data.first_name;
    
    info.append(mainInfo);
}

function showAvtr(data){
    const info = document.querySelector('#info');
    var imageURL = data.data.avatar;
    var avtr = document.createElement('img');
    avtr.setAttribute('src', imageURL);
    info.append(avtr);

}
