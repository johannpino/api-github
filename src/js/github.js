class Github{

    constructor(client_id, client_secret){
        this.client_id = client_id;
        this.client_secret = client_secret;
        this.repoSort = "created: asc"
    }

    async fetchUser(user){
        const datosPerfil = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&cliente_secret=${this.client_secret}`);
        const datosRepositorio = await fetch(`http://api.github.com/users/${user}/repos??client_id=${this.client_id}&cliente_secret=${this.client_secret}&sort=${this.repoSort}`);

        const responseRepositorios = await datosRepositorio.json();

        const responsePerfil = await datosPerfil.json();

        return {
            responseRepositorios,
            responsePerfil
        }
    }
}

module.exports = Github;