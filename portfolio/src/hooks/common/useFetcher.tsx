import axios from "axios";

const useFetcher = async (url: string) => {
    const res = await axios.get(url);
    return res.data;
  }

export default useFetcher