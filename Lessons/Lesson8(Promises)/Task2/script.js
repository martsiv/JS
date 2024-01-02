// Обробник події unhandledrejection (для браузерів і аналог для іншого оточення), 
// щоб відстежувати необроблені помилки і інформувати про них користувача
window.addEventListener('unhandledrejection', function (event) {
    alert(event.promise); // [object Promise] - проміс, який згенерував помилку
    alert(event.reason); // Error: Whoops! - об’єкт помилки, яка не була оброблена
});

let myForm = document.forms.searchingGitForm;
let $photo = $('.photo img');
let $name = $('.namePlaceholder');
let $login = $('.loginPlaceholder');
let $urlGit = $('.urlGitPlaceholder');
let $blog = $('.urlBlog');
let $country = $('.countryPlaceholder');
let $emailPlaceholder = $('.emailPlaceholder');
let $followersPlaceholder = $('.followersPlaceholder');

myForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Зупиняємо стандартну поведінку форми (відправку на сервер)
    handleEnterKeyPress();
});

function handleEnterKeyPress() {
    let username = myForm.loginGitHub;
    loadGithubUser(username.value)
        .then(githubUser => setToDOM(githubUser))
        .catch(error => alert("User not found. " + error.message));
}

function loadGithubUser(name) {
    return loadJson(`https://api.github.com/users/${name}`);
}

async function loadJson(url) {
    let response = await fetch(url);
    if (!response.ok) {
        throw new Error(`GitHub API request failed! Status: ${response.status}`);
    }
    return await response.json();
}

function setToDOM(githubUser) {
    $photo.attr("src", githubUser.avatar_url);
    $name.append(githubUser.name);
    $login.append(githubUser.login);
    $urlGit.attr("href", githubUser.html_url);
    $urlGit.text(githubUser.html_url);
    $blog.attr("href", githubUser?.blog);
    $blog.text(githubUser?.blog || "no blog");
    $country.append(githubUser.location);
    $emailPlaceholder.append(githubUser?.email ?? 'no email');
    $followersPlaceholder.append(githubUser.followers);
}