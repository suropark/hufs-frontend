import axios from "axios";

export function getList() {
  const request = axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.data);
  return request;
}
