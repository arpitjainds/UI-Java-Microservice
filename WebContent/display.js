$.ajax({
  url: "http://fibonacci-service-talkative-emu.mybluemix.net/fibonacci?iteration=100",
 
}).done(function(data) {
  $('#parse_data').append(JSON.stringify(data))
});