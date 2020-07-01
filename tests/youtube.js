     var tag = document.createElement('script');

     tag.src = "https://www.youtube.com/iframe_api";
     var firstScriptTag = document.getElementsByTagName('script')[0];
     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

     // 3. This function creates an <iframe> (and YouTube player)
     //    after the API code downloads.
     var player;
     var videotime = 0;
     function onYouTubePlayerAPIReady() {
       player = new YT.Player('player', {
         height: '390',
         width: '640',
         videoId: 'dlEAM2EQci4',
         playsinline: '1',
         events: {
           'onReady': onPlayerReady,
           'onStateChange': onPlayerStateChange
         }
       });
     }

     // 4. The API will call this function when the video player is ready.
     function onPlayerReady(event) {
       //event.target.playVideo();
       player.seekTo(13)
       document.getElementById('play').innerHTML = '<a href="#" onclick="play();">Play (from hidden YouTube)</a>';
       function updateTime() {
         var oldTime = videotime;
         if(player && player.getCurrentTime) {
           videotime = player.getCurrentTime();

           document.getElementById("time").innerHTML = videotime.toFixed(2);
         }
       }
       timeupdater = setInterval(updateTime, 40);
       
       play();
     }

     function play(){
       player.playVideo();
     }

     // 5. The API calls this function when the player's state changes.
     //    The function indicates that when playing a video (state=1),
     //    the player should play for six seconds and then stop.
     var done = false;
     function onPlayerStateChange(event) {
       // if (event.data == YT.PlayerState.PLAYING && !done) {
       //   setTimeout(stopVideo, 6000);
       //   done = true;
       // }
     }
     function stopVideo() {
       player.stopVideo();
     }
