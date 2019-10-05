/* global $ */

var names = JSON.parse(
  window.localStorage.getItem('names')
)

if (names == null) {
  names = []
}

names = window.prompt(
  'Write a comma-separated list of all the names.',
  names.join(', ')
)

if (names === false || names === null) {
  window.alert('No names given.')
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

        // Left arrow key
        if (keyCode == 37) {
          window.location.reload()
        }

        // Right arrow key
        if (keyCode == 39) {
          writeRandomName()
        }
      }
    )

    $(document).on(
      'click',
      writeRandomName
    )
  }
)
