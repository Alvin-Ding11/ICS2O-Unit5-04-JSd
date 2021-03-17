document.getElementById('image').addEventListener('click', image)
document.getElementById('text').addEventListener('click', text)
document.getElementById('hide').addEventListener('click', hide)
document.getElementById('appear').addEventListener('click', appear)
document.getElementById('back').addEventListener('click', back)

function image () {
  document.getElementById('panda').src = 'images/Pandaday.jfif'
}
//This function changes the image of the Panda on the basketball to another image of a panda

function text () {
  document.getElementById('para').innerHTML = 'This is the altered text after pressing the button'
}
//This function changes the text that is shown in the paragraph

function hide () {
  document.getElementById('para').style.display = 'none'
}
//This function makes the text disapper on the screen

function appear () {
  document.getElementById('para').style.display = 'block'
}
//This function can make the text reapper on the screen once it has been removed

function back () {
  document.body.style.backgroundColor = 'blue'
}
//This function changes the entire background for the body of the website
