const start_button = document.getElementById('start');
const stop_button = document.getElementById('stop');
const reset_button = document.getElementById('reset');
const lap_button = document.getElementById('lap');
const time = document.getElementById('timer');
const lapComment = document.getElementById('lap_comment');

var f = false;
let interval = 0;
let seconds = 0;
let minutes = 0;

const milliseconds = () =>{
	interval++ ;
	if (interval % 100 === 0) seconds++;
	if (interval % 6000 === 0) minutes++;

	if (seconds < 10) seconds = '0' + seconds++; else seconds = seconds++ % 60;
	if (minutes < 10) minutes = '0' + minutes++; else minutes = minutes++ % 60;
	time.innerHTML = `${minutes}:${seconds}:${interval% 100}`;
	f = true;
}

const start = () =>{
	start_button.addEventListener('click', () =>{
		if (!f) timer = setInterval(milliseconds,10);

		stop_button.addEventListener('click', ()=>{
			clearInterval(timer);
			f = false;
		},{once:true})

		reset_button.addEventListener('click', ()=>{
			interval = 0;
			seconds = 0;
			minutes = 0;
			lapComment.innerHTML = '';
			time.innerHTML = `00:00:00`;
			clearInterval(timer);
			f = false;
		},{once:true})	
	})
}

lap_button.addEventListener('click', ()=>{
	lapComment.innerHTML += '<p>  ' + time.innerHTML + '</p>';
})

start()