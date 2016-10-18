$(document).ready(function() {
  // Add youtube embed api
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Set up youtube player
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-player', {
      height: '400',
      width: '700',
      videoId: 'CtJkEWCQEbE',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  function onPlayerReady(event) {
    event.target.seekTo(32);
    event.target.playVideo();
  }

