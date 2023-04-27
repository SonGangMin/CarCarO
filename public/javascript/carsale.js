const from = document.getElementById('from');
const domestic = document.getElementById('domestic');
const importation = document.getElementById('import');

from.addEventListener('change', () => {
    if(from.value === "국산"){
        domestic.style.display="inline-block";
        importation.style.display="none";
        console.log('123');
    } else{
        domestic.style.display="none";
        importation.style.display="inline-block";
    }
});