import axios from "axios";

export default axios.create({
  baseURL: "https://api.github.com",
  headers: {
    "Content-type": "application/json",
    Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESS_TOKEN}`,
  },
});
