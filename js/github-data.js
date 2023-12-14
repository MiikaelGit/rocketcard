const id = document.querySelector('.name');
const img = document.querySelector('.frame img');
const cardButton = document.querySelector('.card-button');
const userFollowers = document.querySelector('.followers');
const userFollowing = document.querySelector('.following');
const userRepository = document.querySelector('.repository');
const userCompany = document.querySelector('.company');
const userLocation = document.querySelector('.location');
let name = 'miikaelgit';

function user(name) {
    const profile = `https://api.github.com/users/${name}`;

    return fetch(profile)
        .then(data => data.json())
        .then(({ login, followers, following, public_repos, company, location }) => ({
            login,
            followers,
            following,
            public_repos,
            company,
            location
        }))
}

export async function data() {
    const username = await user(name)
    id.textContent = username.login;
    img.src = `https://github.com/${username.login}.png`;
    img.alt = `Foto de ${username.login}`
    userFollowers.innerHTML = `${username.followers} Seguidores`;
    userFollowing.innerHTML = `${username.following} Seguindo`;
    userRepository.innerHTML = `${username.public_repos} Repositórios`;
    userCompany.innerHTML = username.company ? username.company : 'Não informado';
    userLocation.innerHTML = username.location ? username.location : 'Não informado'
}

cardButton.onclick = () => {
    const person = prompt('Digite seu nome de usuário')
    name = person
    data()
}
