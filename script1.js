let nameBtn = document.querySelector('button');
nameBtn.addEventListener('click', inputname);

function inputname(){
    let name=prompt('Enter name of student');
    nameBtn.textContent= 'Roll no. 182:' + name;
}