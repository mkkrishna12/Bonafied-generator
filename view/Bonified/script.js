const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const nameInput = document.getElementById('name')
const classInput = document.getElementById('class')
const yearInput = document.getElementById('year')
const deptInput = document.getElementById('dept')
const resInput = document.getElementById('res')
const downloadBtn = document.getElementById('download-btn')

const image = new Image()
image.src = 'certificate.png'
image.onload = function () {
	drawImage()
}

function drawImage(x,y) {
	// ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
	ctx.font = '25px monotype corsiva'
	ctx.fillStyle = '#29e'
	ctx.fillText(nameInput.value, x, y)
}

nameInput.addEventListener('input', function () {
	drawImage(245,110)
})
classInput.addEventListener('input', function () {
	drawImage(458,169)
})
yearInput.addEventListener('input', function () {
	drawImage(146,198)
})
deptInput.addEventListener('input', function () {
	drawImage(247,197)
})
resInput.addEventListener('input', function () {
	drawImage(210,232)
})

downloadBtn.addEventListener('click', function () {
	downloadBtn.href = canvas.toDataURL('image/jpg')
	downloadBtn.download = 'Certificate - ' + nameInput.value
})
