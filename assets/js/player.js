let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');



let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song = [
    {
        name: "TRUE LOVE",
        path: "DONDA2/TRUE-LOVE.mp3",
        img: "images/img1.jpg",
        singer: ""
      },
      {
        name: "BROKEN ROAD",
        path: "DONDA2/BROKEN-ROAD.mp3",
        img: "images/img1.jpg",
        singer: ""
      },
      {
        name: "GET LOST",
        path: "DONDA2/GET-LOST.mp3",
        img: "images/img1.jpg",
        singer: ""
      },
      {
        name: "TOO EASY",
        path: "DONDA2/TOO-EASY.mp3",
        img: "images/img1.jpg",
        singer: ""
      },
      {
        name: "FLOWERS",
        path: "DONDA2/FLOWERS.mp3",
        img: "images/img1.jpg",
        singer: ""
      },
      {
        name: "SECURITY",
        path: "DONDA2/SECURITY.mp3",
        img: "images/img1.jpg",
        singer: ""
      },
      {
        name: "WE DID IT KID",
        path: "DONDA2/WE-DID-IT-KID.mp3",
        img: "images/img1.jpg",
        singer: ""
      },
      {
        name: "PABLO",
        path: "DONDA2/PABLO.mp3",
        img: "images/img1.jpg",
        singer: ""
      },
      {
        name: "LOUIE BAGS",
        path: "DONDA2/LOUIE-BAGS.mp3",
        img: "images/img1.jpg",
        singer: ""
      },
      {
        name: "HAPPY",
        path: "DONDA2/HAPPY.mp3",
        img: "images/img1.jpg",
        singer: ""
      },
      {
        name: "SCI FI",
        path: "DONDA2/SCI-FI.mp3",
        img: "images/img1.jpg",
        singer: ""
      },
      {
        name: "SELFISH",
        path: "DONDA2/SELFISH.mp3",
        img: "images/img1.jpg",
        singer: ""
      },
      {
        name: "LORD LIFT ME UP",
        path: "DONDA2/LORD-LIFT-ME-UP.mp3",
        img: "images/img1.jpg",
        singer: ""
      },
      {
        name: "CITY OF GODS",
        path: "DONDA2/CITY-OF-GODS.mp3",
        img: "images/img1.jpg",
        singer: ""
      },
      {
        name: "FIRST TIME IN A LONG TIME",
        path: "DONDA2/FIRST-TIME-IN-A-LONG-TIME.mp3",
        img: "images/img1.jpg",
        singer: ""
      },
      {
        name: "EAZY",
        path: "DONDA2/EAZY.mp3",
        img: "images/img1.jpg",
        singer: ""
      },
   
];


// All functions


// function load the track
function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


//mute sound function
function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }


// reset song slider
 function reset_slider(){
 	slider.value = 0;
 }

// play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


// next song
function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


// previous song
function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


// change volume
function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch(){
	if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "rgba(255,255,255,0.2)";
	}else{
       autoplay = 1;
       auto_play.style.background = "#148F77";
	}
}


function range_slider(){
	let position = 0;
        
        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       
       // function will run when the song is over
       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
     }