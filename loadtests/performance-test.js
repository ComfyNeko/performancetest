import { sleep } from"k6";
import http from "k6/http";

export let options = {
  duration: "30s",
  vus: 100,
 
};

export default function() {
  http.get('http://34.82.204.218/Admin/quizzie.php');
  sleep(3);
};
