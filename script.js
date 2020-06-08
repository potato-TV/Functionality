const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://ee.iva-api.com/api/Entertainment/Search/?Take=50&SortBy=TimeStampAsc&Includes=Videos,Images,Descriptions&NextPageToken=eyJTb3J0IjoiVGltZVN0YW1wQXNjIiwiU29ydFZhbHVlIjoiMjAxNi0wMy0xNVQxNTo0MTowMC4wMDAwMDAwWiIsIlRpZUJyZWFrZXIiOiIyMDE1LTEyLTA4VDEyOjIwOjAwLjAwMDAwMDBaIn0=&subscription-Key={a7074b16337948bbb009cc63d8e8c01d} ', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status == 200) {
    data.forEach(movie => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = movie.Hits.Source.Title;

      const p = document.createElement('p');
      p.textContent = movie.Hits.Source.Id;

      const q = document.createElement('q');
      q.textContent = movie.Images.FilePath;

      const r = document.createElement('r');
      r.textContent = movie.Releases.Date;

      const s = document.createElement('s');
      s.textContent = movie.Availabilities.Provider;

      const t = document.createElement('t');
      t.textContent = movie.Availabilities.Links.Url;

      const u = document.createElement('u');
      u.textContent = movie.Contributors.PersonName;

      const v = document.createElement('v');
      v.textContent = movie.Contributors.Job;




      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
      card.appendChild(q);
      card.appendChild(r);
      card.appendChild(s);
      card.appendChild(t);
      card.appendChild(u);
      card.appendChild(v);
    });
  } else if (request.status == 204) {
    const errorMessage = document.createElement('errorMessage');
    errorMessage.textContent = `No content`;
    app.appendChild(errorMessage);
  }else if (request.status == 400) {
    const errorMessage1 = document.createElement('errorMessage1');
    errorMessage1.textContent = `Bad Request`;
    app.appendChild(errorMessage1);
  }else if (request.status == 401) {
    const errorMessage2 = document.createElement('errorMessage2');
    errorMessage2.textContent = `Unauthorized`;
    app.appendChild(errorMessage2);
  }else if (request.status == 403) {
    const errorMessage3 = document.createElement('errorMessage3');
    errorMessage3.textContent = `Forbidden. The subscription key does not have permission to access this method`;
    app.appendChild(errorMessage3);
  }else if (request.status == 404) {
    const errorMessage4 = document.createElement('errorMessage4');
    errorMessage4.textContent = `Not found. The item you requested could not be found or has been deleted.`;
    app.appendChild(errorMessage4);
  }else if (request.status == 409) {
    const errorMessage5 = document.createElement('errorMessage5');
    errorMessage5.textContent = `Conflict.`;
    app.appendChild(errorMessage5);
  }else if (request.status == 429) {
    const errorMessage6 = document.createElement('errorMessage6');
    errorMessage6.textContent = `Too many requests.`;
    app.appendChild(errorMessage6);
  }else if (request.status == 500) {
    const errorMessage7 = document.createElement('errorMessage7');
    errorMessage7.textContent = `Internal server error`;
    app.appendChild(errorMessage7);
  }else if (request.status == 503) {
    const errorMessage8 = document.createElement('errorMessage8');
    errorMessage8.textContent = `Service unavailable`;
    app.appendChild(errorMessage8);
  }
}

request.send();