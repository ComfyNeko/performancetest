import { sleep } from"k6";
import http from "k6/http";

export let options = {
  duration: "0.30m",
  vus: 50,
 
};

export default function() {
  var url = 'http://test.k6.io/login';
  var payload = JSON.stringify({ email: 'keerthanasrikumar3@gmail.com', password: 'Skeer1209*' });
  http.get('http://35.235.127.18');
  sleep(3);
};
