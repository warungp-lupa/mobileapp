function PalupidataMenu(callback) {
    fetch('http://10.2.15.46:5127/menu', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (!response.ok) {
        throw new Error('Response')
      }
      return response.json();
    }).then(data => {
      console.log(data);
      callback(data);
    }).catch(err => { console.log(err) });
  }
  function getPalupi(key, callback) {
    fetch(`http://10.2.15.46:5127/menu/cari/${key}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        callback(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
  
  export { PalupidataMenu, getPalupi } ;