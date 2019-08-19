/* global $, prompt, alert */

var names = JSON.parse(
  window.localStorage.getItem('names')
)

if (names == null) {
  names = []
}

names = prompt(
  'Write a comma-separated list of all the names.',
  names.join(', ')
)

if (names === false || names === null) {
  alert('No names given.')
}

names = names.split(/\s*,\s*/)

window.localStorage.setItem(
  'names',
  JSON.stringify(names)
)

function getRandomName () {
  if (names.length === 0) {
    return ''
  }

  var key = Math.floor(Math.random() * names.length)

  var name = names[key]

  names.splice(key, 1)

  return name
}

function writeRandomName () {
  var fadeTime = 200

  $('#name').fadeOut(
    fadeTime,
    function () {
      var name = getRandomName()

      if (!name) {
        return
      }

      console.log(name)

      $('#name').html(name)

      $('#name').fadeIn(fadeTime)
    }
  )
}

$(document).ready(
  function () {
    $(document).keydown(
      function (e) {
        var keyCode = (e.keyCode ? e.keyCode : e.which)

        // F keys
        if (keyCode >= 112 && keyCode <= 123) {
          return
        }

        writeRandomName()
      }
    )

    $(document).on(
      'click',
      writeRandomName
    )
  }
)
