<h1> Video & Audio Accessibility Research <h1>
  
  TODO : Video Part

1. The Video Part- Des

Split as player section and footer section.
Player section used as a player window.
Most multimedia controls functions is in the footer section.
Below the player section, needs a video progress bar (pointer).
Split a footer section as a LEFT section and a RIGHT section.
      A LEFT section: volume, play, and pause buttons 
      A RIGHT section: full screen, time 
Add a Skip video function on the video progress bar (pointer)


2. The Video Part- Dev

Using vue.js
Using multiple vue.js in one file.
Using v-if for the mute and pause toggle function.
Using @click=”” : 
 @click=”muteToggle”,@click=”changeVolume”,   
 @click=”toffleFullScreen”,@click=”play”,@click=”pause”


3. A challenge

The pause button click function is not available after the play button click.
After a play button, it should click the sound button first once it needs a pause function.
  Tried to edit sass files for the functionality, it doesn’t work.
A number of the timing section’s arrangement looks not working. I assume because my video length (mins and sec) and syntax (hour, mins and sec) are different. But, I couldn't resolve it.





TODO : Audio Part

1. The Video Part- Des

Build audio background includes buttons, music progress bar and title.
Put the album image on the background.
A user can click a play, pause, pre, back buttons.




2. The Video Part- Dev
Using vanilla Javascript
Once a click can get  play, pause, pre, back functions.
Once a click a music01, show up a music01 cover image on the background at the same time.


3. A challenge

A failure: Once a click a music01, show up a music01 cover image on the background at the same time.
A failure: click pause, pre and next button.
