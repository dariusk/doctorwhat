/* global sharing, actors */

Array.prototype.pick = function() {
  return this[Math.floor(Math.random()*this.length)];
};

function generate(actor) {
//  nounPlural = nounPlural || nouns.pick().pluralize();
//  verb = verb || verbs.pick();
  actor = actor || actors.pick();
  actor = actor.titleize();
  var displayText = 'The next Doctor Who will be played by <a href="http://en.wikipedia.org/wiki/' + actor + '">' + actor.replace(/\s\(.*\)/,'') + '</a>!';
  var generatedText = 'The next Doctor Who will be played by ' + actor + '! #doctorwhaaa';
  $('#content').html(displayText);
  var shareUrl = window.location.href.split('?')[0]+'?word='+sharing.encodeStr(actor)+'$a';
  $('#share').attr('href', shareUrl);
  $('.twitter-share-button').remove();
  $('#twitterShare').html('<a href="https://twitter.com/share" class="twitter-share-button" data-url="' + shareUrl + '" data-text="' + generatedText + '" data-lang="en">Tweet</a>');
  if (twttr.widgets) {
    twttr.widgets.load();
  }
}

$('#generate').click(function() { generate(); });
if (sharing.gup('word') === '') {
  generate();
}
else {
  var actor = sharing.decodeStr(unescape(sharing.gup('word')).split('$')[0]);
  //var nounPlural = sharing.decodeStr(unescape(sharing.gup('word')).split('$')[1]);
  console.log(actor);
  generate(actor);
}
