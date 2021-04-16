function pokemon() {
    var N = document.querySelector("#N").value;
    image = document.getElementById('pokeI');
    if (N > 0 && N < 899) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${N}`)
            .then(function (response) {
                if (!response.ok) throw new Error('Erro ao executar a requisicao, erro ' + response.status);
                return response.json();
            })
            .then(function (data) {
                image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${N}.png`;
                document.querySelector("#pokeN").innerHTML = data.name;
                if (data.types.length > 1) {
                    for (var i = 0; i < 2; i++) {
                        document.querySelector(`#type${i}`).innerHTML = data.types[i].type.name;
                        type(`type${i}`, `${data.types[i].type.name}`);
                    }
                } else {
                    document.querySelector("#type0").innerHTML = data.types[0].type.name;
                    type("type0", `${data.types[0].type.name}`);
                    type("type1", "");
                }
                var div = document.getElementById("skill1_trat");
                if (data.abilities.length > 1) {
                    for (var i = 0; i < 2; i++) {
                        abilities(data.abilities[i].ability.url, `#skill${i}_name`, `#skill${i}_desc`, `#skill${i}`);
                        div.style.display = "block";
                    }
                } else {
                    abilities(data.abilities[0].ability.url, `#skill${0}_name`, `#skill${0}_desc`, `#skill${0}`);
                    div.style.display = "none";
                }
            })
            .catch(function (error) {
                console.error(error.message);
            })
    } else {
        image.src = "https://pbs.twimg.com/media/EUmU59BXQAY8JzY.png"
        for (var i = 0; i < 2; i++) {
            document.querySelector("#pokeN").innerHTML = "Pokemon name";
            document.querySelector(`#type${i}`).innerHTML = "Type";
            document.querySelector(`#skill${i}_name`).innerHTML = "Name";
            document.querySelector(`#skill${i}_desc`).innerHTML = "Description";
            var div = document.getElementById(`type${i}`);
            div.style.backgroundColor = "grey";
        }
    }
}
function abilities(url, el, el2) {
    fetch(url)
        .then(function (response) {
            if (!response.ok) throw new Error('Erro ao executar a requisicao, erro ' + response.status);
            return response.json();
        })
        .then(function (data) {
            document.querySelector(el).innerHTML = data.name;
            document.querySelector(el2).innerHTML = data.effect_entries[0].effect;
        })
        .catch(function (error) {
            console.error(error.message);
        })
}
function type(el, el2) {
    var div = document.getElementById(el);
    if (el2 == "") {
        div.style.display = 'none';
    } else {
        div.style.display = 'block';
        if (el2 == "normal") {
            div.style.backgroundColor = '#ababab';
        }
        if (el2 == "fire") {
            div.style.backgroundColor = '#ff4d4d';
        }
        if (el2 == "water") {
            div.style.backgroundColor = '#4d73ff';
        }
        if (el2 == "grass") {
            div.style.backgroundColor = '#4fff4d';
        }
        if (el2 == "electric") {
            div.style.backgroundColor = '#fff94d';
        }
        if (el2 == "ice") {
            div.style.backgroundColor = '#4dffe7';
        }
        if (el2 == "fighting") {
            div.style.backgroundColor = '#c23a3a';
        }
        if (el2 == "poison") {
            div.style.backgroundColor = '#c14dff';
        }
        if (el2 == "ground") {
            div.style.backgroundColor = '#ffa64d';
        }
        if (el2 == "flying") {
            div.style.backgroundColor = '#e46bff';
        }
        if (el2 == "psychic") {
            div.style.backgroundColor = '#ff4d88';
        }
        if (el2 == "bug") {
            div.style.backgroundColor = '#9db334';
        }
        if (el2 == "rock") {
            div.style.backgroundColor = '#b39e34';
        }
        if (el2 == "ghost") {
            div.style.backgroundColor = '#723cbd';
        }
        if (el2 == "dark") {
            div.style.backgroundColor = '#474747';
        }
        if (el2 == "dragon") {
            div.style.backgroundColor = '#510aa3';
        }
        if (el2 == "steel") {
            div.style.backgroundColor = '#c1b9c9';
        }
        if (el2 == "fairy") {
            div.style.backgroundColor = '#ff9ce9';
        }
    }
}