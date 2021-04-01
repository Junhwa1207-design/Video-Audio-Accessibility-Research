let app = new Vue ({
    el: "#player",
    data: {
      video:{
          src: "images/movie.mp4"
      },
      isFullScreen: false
    },

    mounted: function(){
        
        let events = [

            'timeUpdate',
            'volumechange',
            'seeked',
            'loadedmetadata'
        ];

        events.map(e => {
            this.$refs.videoElem.addEventListener(e, ()=> {
              this.$forceUpdate();
            });
         });

         this.$refs.videoElem.addEventListener('loadedmetadata', ()=> {
            this.$refs.videoElem.volume = 0.3;
            this.$forceUpdate();
         });

         this.$refs.videoElem.addEventListener('click', ()=> {
            if(this.isPaused()) {
                this.play();
            } else {
                this.pause();
            }
         });

         this.$refs.videoElem.addEventListener('dbclick', ()=> {
            this.toggleFullScreen();
         });


           
    },
    

    methods: {

        muteToggle:function(){
            this.$refs.videoElem.muted = !this.$refs.videoElem.muted;
        },

        isMuted: function(){
            return this.$refs.videoElem ? this.$refs.videoElem.muted :false;
        },
        pause: function() {
            this.$refs.videoElem.pause();
        },

        isPaused: function(){
            return this.$refs.videoElem ? this.$refs.videoElem.paused :true;
        },

        play: function() {
            this.$refs.videoElem.play();
        },

    
        currentTime: function(){
            return this.$refs.videoElem?.currentTime || 0;
        },

        duration: function () {
            return this.$refs.videoElem?.duration || 0;
        },

        progressPercentage: function() {
            return (this.currentTime() / this.duration()) * 100;
        },
        formatTime: function(time){
            if (!time || !parseInt(time)) {
                return `00:00`;
            }

            let hours, minutes, seconds;
            minutes = Math.floor (((time / 60) % 60)),
              seconds = Math.floor(time % 60),
              hours = Math.floor(time / 60 /60);

              if(minutes < 10) minutes = `0${minutes}`;
              if(seconds < 10) seconds = `0${seconds}`;

              return `${hours ? hours + ':' : ''}${minutes}:${seconds}`;

              return `${minutes}:${seconds}`;
        },

        skipVideo: function(event){
            let wrapper_offset = event.currentTarget.getBoundingClientRect().left;
            let clicked_offset = event.clientX - wrapper_offset;

            let progress_width = (clicked_offset / event.currentTarget.getBoundingClientRect().width )* 100;
            let newTime = (this.duration() / 100) * progress_width;

            this.$refs.videoElem.currentTime = newTime;
        },

        toggleFullScreen: function(){
        screenfull.toggle();
        this.isFullScreen = !this.isFullScreen;
        this.$forceUpdate();
       },

       changeVolume: function(event){
        let wrapper_offset = event.currentTarget.getBoundingClientRect().left;
        let clicked_offset = event.clientX - wrapper_offset;
        let volume_bar_width = (clicked_offset / event.currentTarget.getBoundingClientRect().width )* 100;
        this.$refs.videoElem.volume = volume_bar_width /100;
       },

       volume: function(){
           return this.$refs.videoElem ? this.$refs.videoElem.volume *100 : 0;
       }
    }
});

let app2 = new Vue ({
    el: "#player2",
    data: {
      video:{
          src: "images/movie.mp4"
      },
      isFullScreen: false
    },

    mounted: function(){
        
        let events = [

            'timeUpdate',
            'volumechange',
            'seeked',
            'loadedmetadata'
        ];

        events.map(e => {
            this.$refs.videoElem.addEventListener(e, ()=> {
              this.$forceUpdate();
            });
         });

         this.$refs.videoElem.addEventListener('loadedmetadata', ()=> {
            this.$refs.videoElem.volume = 0.3;
            this.$forceUpdate();
         });

         this.$refs.videoElem.addEventListener('click', ()=> {
            if(this.isPaused()) {
                this.play();
            } else {
                this.pause();
            }
         });

         this.$refs.videoElem.addEventListener('dbclick', ()=> {
            this.toggleFullScreen();
         });


           
    },
    

    methods: {

        muteToggle:function(){
            this.$refs.videoElem.muted = !this.$refs.videoElem.muted;
        },

        isMuted: function(){
            return this.$refs.videoElem ? this.$refs.videoElem.muted :false;
        },
        pause: function() {
            this.$refs.videoElem.pause();
        },

        isPaused: function(){
            return this.$refs.videoElem ? this.$refs.videoElem.paused :true;
        },

        play: function() {
            this.$refs.videoElem.play();
        },

    
        currentTime: function(){
            return this.$refs.videoElem?.currentTime || 0;
        },

        duration: function () {
            return this.$refs.videoElem?.duration || 0;
        },

        progressPercentage: function() {
            return (this.currentTime() / this.duration()) * 100;
        },
        formatTime: function(time){
            if (!time || !parseInt(time)) {
                return `00:00`;
            }

            let hours, minutes, seconds;
            minutes = Math.floor (((time / 60) % 60)),
              seconds = Math.floor(time % 60),
              hours = Math.floor(time / 60 /60);

              if(minutes < 10) minutes = `0${minutes}`;
              if(seconds < 10) seconds = `0${seconds}`;

              return `${hours ? hours + ':' : ''}${minutes}:${seconds}`;

              return `${minutes}:${seconds}`;
        },

        skipVideo: function(event){
            let wrapper_offset = event.currentTarget.getBoundingClientRect().left;
            let clicked_offset = event.clientX - wrapper_offset;

            let progress_width = (clicked_offset / event.currentTarget.getBoundingClientRect().width )* 100;
            let newTime = (this.duration() / 100) * progress_width;

            this.$refs.videoElem.currentTime = newTime;
        },

        toggleFullScreen: function(){
        screenfull.toggle();
        this.isFullScreen = !this.isFullScreen;
        this.$forceUpdate();
       },

       changeVolume: function(event){
        let wrapper_offset = event.currentTarget.getBoundingClientRect().left;
        let clicked_offset = event.clientX - wrapper_offset;
        let volume_bar_width = (clicked_offset / event.currentTarget.getBoundingClientRect().width )* 100;
        this.$refs.videoElem.volume = volume_bar_width /100;
       },

       volume: function(){
           return this.$refs.videoElem ? this.$refs.videoElem.volume *100 : 0;
       }
    }
});



(()=> {
//create an array of song that I want to play

    var songs = ["images/music.mp3", "images/music2.mp3"];
    var poster = ["images/poster1.jpg", "images/poster2.jpg"];

    var songTitle = document.getElementById("songTitle");
    var fillBar = document.getElementById("fill");

    //create object of audios
    var song = new Audio();
    var currentSong = 0; // it point to the current song

    window.onload = playSong; // it will call the function playSong when window is loaded

    function playSong() {

        song.src = songs[currentSong];//set the sourcr of the song

        songTitle.textContent = songs[currentSong]; //set the title of song

        song.play(); //play the song
    }

    //needs change the play button icon to pause button icon
    //then for play and pause

    function playOrPauseSong(){

        if(song.paused){
            song.play();
            $("#play img").attr("src", "images/pause.png");

        }else{
            song.pause();
            $("#play img").attr("src", "images/play.png");

        }
    }

    song.addEventListener('timeupdate', function(){

        var position = song.currentTime / song.duration;

        fillBar.style.width = position * 100 +'%';
    });

    function next(){

        currentSong++;
        if(currentSong > 2) {
            currentSong = 0;
        }

        playSong();
        $("#play img").attr("src", "images/pause.png");
        $("#play img").attr("src", "poster[currentSong]");
    }


    function pre(){

        currentSong--;
        if(currentSong > 0) {
            currentSong = 2;
        }

        playSong();
        $("#play img").attr("src", "images/pause.png");
        $("#play img").attr("src", "poster[currentSong]");
    }


})();