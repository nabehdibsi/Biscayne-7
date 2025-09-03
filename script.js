document.getElementById('year').textContent=new Date().getFullYear();
function handleSubmit(e){e.preventDefault();alert('Thanks — we\'ll be in touch shortly!');e.target.reset();}