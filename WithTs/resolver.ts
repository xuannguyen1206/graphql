import axios from "axios";

const resolver = {
  Query: {
    rocket: async () => {
      const { data } = await axios.get(
        "https://api.spacexdata.com/v4/launches"
      );
      console.log(data);
      return data;
    },
    hello: () => "Hello World",
  },
};
export default resolver;
