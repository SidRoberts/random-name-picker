if (typeof names == 'undefined') {
    alert('Names are not defined');
}

function getRandomName()
{
    if (names.length == 0) {
        return "";
    }

    key = Math.floor(Math.random() * names.length);

    name = names[key];

    names.splice(key, 1);

    return name;
}

function writeRandomName()
{
    fadeTime = 200;

    $('#name').fadeOut(
        fadeTime,
        function () {
            name = getRandomName();

            if (!name) {
                return;
            }

            console.log(name);

            $('#name').html(name);

            $('#name').fadeIn(fadeTime);
        }
    );
}

$(document).ready(
    function () {
        $(document).keydown(
            function (e) {
                keyCode = (e.keyCode ? e.keyCode : e.which);

                // F keys
                if (keyCode < 112 || keyCode > 123) {
                    writeRandomName();
                }
            }
        );

        $(document).on(
            'click',
            writeRandomName
        );
    }
);
