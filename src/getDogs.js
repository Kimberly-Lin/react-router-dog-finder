import axios from "axios";

async function getDogs(url = "http://localhost:5000/dogs") {
  const result = await axios.get(url);
  console.log("getDogs result", result);
  return result.data;
}

export default getDogs;
