import { sleep } from"k6";
import http from "k6/http";

export let options = {
  duration: "0.30m",
  vus: 50,
 
};

export default function() {
  var url = 'https://app.k6.io/account/login';
  var payload = JSON.stringify({ email: 'keerthanasrikumar3@gmail.com', password: 'Skeer1209*' });
  var params = {
    headers: { 'Content-Type': 'application/json', Myheader: 'TOKEN_STRING' },
  };
 // http.get('http://test.k6.io/?firewall_token=TOKEN_STRING');
  http.post(url, payload, params);
  http.get('http://35.235.127.18');
  sleep(3);
};
