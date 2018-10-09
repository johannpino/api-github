const UI = require('./ui');
const Github = require('./github')

const {client_id, client_secret} = require('./config.json');

const github = new Github(client_id,client_secret);

const ui = new UI();

const userForm = document.getElementById('user-form');

userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputSearch = document.getElementById('input-search');
    const inputSearchValue = inputSearch.value;
    
    if(inputSearchValue === ''){
        inputSearch.focus();
    }

    github.fetchUser(inputSearchValue)
    .then(data => {
        if(data.responsePerfil.message === 'Not Found'){
            ui.showMessage('User not found', 'alert alert-danger col-md-12 mt-2') 
        }else{
            ui.showProfile(data.responsePerfil);
            ui.showRepositories(data.responseRepositorios);
        }
    })
} )
