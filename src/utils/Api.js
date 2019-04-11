import Config from '../Config';

class Api {
  getHome() {
    return fetch(`${Config.host}/api/home`)
      .then(res => res.json())
      .then(data => {
        // console.log("Api.js data:",data);
        if (data.success === true) {
          // console.log("success!!");
          // console.log("data.cities", data.cities)
          return data.cities;
        }
        return "error loading the data"
      });
  }
}

export default new Api();