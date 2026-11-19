// ?lang=ar shows the Arabic text only, ?lang=<other> the English (the game opens the page in its language);
// with no ?lang (the public page) both are shown
(function () {
  var m = /[?&]lang=([a-z]+)/.exec(location.search);
  if (!m) return;
  var want = m[1] === 'ar' ? 'ar' : 'en';
  document.body.className = 'one';
  var arts = document.getElementsByTagName('article');
  for (var i = 0; i < arts.length; i++) arts[i].hidden = arts[i].lang !== want;
  document.documentElement.lang = want;
})();
