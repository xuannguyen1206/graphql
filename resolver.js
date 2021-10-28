const axios = require("axios")


const resolver = {
  Query:{
    rocket: async () => {
      const dat = await axios.get('https://api.spacexdata.com/v4/launches');
      console.log(dat);
      return dat;
    },
    hello: () =>  'Hello World',
  }
}
module.exports = resolver;