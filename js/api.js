var api = {
  getUsers(){
    var url = 'http://198.199.107.30/allUsers.php';
    //var url = 'https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=DEMO_KEY';
    return fetch(url).then((res) => res.json());
  }
};

module.exports = api;