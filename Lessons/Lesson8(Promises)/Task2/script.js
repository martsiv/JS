$(document).ready(function () {
    $('#loginInput').keypress(function (event) {
        if (event.which === 13) {
            let inputValue = $(this).val();
            searchInGit(inputValue);
        }
    });
});

function searchInGit(value) {
    console.log('Handling entered value:', value);
    // $login = $("#loginInput");
    // fetch(`https://api.github.com/users/${login.val}`)
    //     .then(res => {
    //         if (res.status === 404) {
    //             alert("Not found");
    //         }
    //         else {
    //             let fullResult = res.json();

    //         }
    //     })
}
