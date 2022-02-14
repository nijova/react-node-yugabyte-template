var r = new XMLHttpRequest();
r.open('GET', 'http://localhost:3000', true);
r.onreadystatechange = function () {
  if (r.readyState != 4 || r.status != 200) return;
  console.log("Success: " + r.responseText);
};
r.send();
