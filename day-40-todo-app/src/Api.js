import $ from 'jquery';

const bucketId = '2578c34d-70b9-49e0-b042-bd59d33734dc';
const baseUrl = 'https://spiffy-todo-api.herokuapp.com/api/';

const Api = {

  refreshData: function(cb) {
    $.ajax({
      url: `${baseUrl}items?bucketId=${bucketId}`
    })
    .done((data) => {
      console.log('what data do I have?', data);
      cb(data);
    });
  },

  delete: function(id, cb) {
    $.ajax({
      url: `${baseUrl}item/${id}?bucketId=${bucketId}`,
      method: 'DELETE'
    })
    .done(cb);
  },

  createNewItem: function(inputText, cb) {
    $.ajax({
      url: `${baseUrl}item?bucketId=${bucketId}`,
      method: 'POST',
      data: {
        text: inputText
      }
    })
    .done(cb);
  }



}

module.exports = Api;
