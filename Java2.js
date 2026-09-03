document.getElementById('start-btn').addEventListener('click', () => {
 const container = document.querySelector('.container');
 container.style.display = 'block';
 document.getElementById('start-btn').style.display = 'none';

 if (document.documentElement.requestFullscreen) {
 document.documentElement.requestFullscreen();
 }

 if (screen.orientation && screen.orientation.lock) {
 screen.orientation.lock('landscape').catch(err => console.error(err));
 }
});
