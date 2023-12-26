$("#loginInput").on('keypress', function (event) {
    if (event.wich === 13) {
        $login = $("#loginInput");
        fetch(`https://api.github.com/users/${login.val}`)
            .then(res => {
                if (res.status === 404) {
                    alert("Not found");
                }
                else {
                    let fullResult = res.json();
                    
                }
            })
    }
});


