let Video = document.querySelector('.video')
let d1 = document.querySelector('._1')
let d2 = document.querySelector('._2')
let d3 = document.querySelector('._3')
let d4 = document.querySelector('._4')
let d5 = document.querySelector('._5')
let d6 = document.querySelector('._6')
let d7 = document.querySelector('._7')
let d8 = document.querySelector('._8')
let d9 = document.querySelector('._9')
let power = document.querySelector('.power')
let mute = document.querySelector('.mute')
let vol_p = document.querySelector('.vp')
let vol_n = document.querySelector('.vn')
let ok = document.querySelector('.ok')
let page_up = document.querySelector('.page_up')
let page_do = document.querySelector('.page_down')
let light = document.querySelector('.light')
let currentChannel = 0;
let chanels = [
    "./assets/videos/tolo.mp4",
    "./assets/videos/atn.mp4",
    "./assets/videos/sport.mp4",
    "./assets/videos/rta.mp4",
    "./assets/videos/music.mp4",
    "./assets/videos/afg.mp4",
    "./assets/videos/eslah.mp4",
    "./assets/videos/arezo.mp4",
    "./assets/videos/faza.mp4"
]

d1.addEventListener('click', () => {
    if (light.style.backgroundColor !== "green") return
    Video.setAttribute('src',chanels [0])
    Video.play()
})
d2.addEventListener('click', () => {
    if (light.style.backgroundColor !== "green") return
    Video.setAttribute('src',chanels [1])
    Video.play()
})
d3.addEventListener('click', () => {
    if (light.style.backgroundColor !== "green") return
    Video.setAttribute('src',chanels [2])
    Video.play()
})
d4.addEventListener('click', () => {
    if (light.style.backgroundColor !== "green") return
    Video.setAttribute('src',chanels [3])
    Video.play()
})
d5.addEventListener('click', () => {
    if (light.style.backgroundColor !== "green") return
    Video.setAttribute('src',chanels [4])
    Video.play()
})
d6.addEventListener('click', () => {
    if (light.style.backgroundColor !== "green") return
    Video.setAttribute('src', chanels[5])
    Video.play()
})
d7.addEventListener('click', () => {
    if (light.style.backgroundColor !== "green") return
    Video.setAttribute('src', chanels[6])
    Video.play()
})
d8.addEventListener('click', () => {
    if (light.style.backgroundColor !== "green") return
    Video.setAttribute('src', chanels[7])
    Video.play()
})
d9.addEventListener('click', () => {
    if (light.style.backgroundColor !== "green") return
    Video.setAttribute('src', chanels[8])
    Video.play()
})
power.addEventListener('click', () => {
    if (light.style.backgroundColor === "red" || Video.paused) {
        Video.setAttribute('src', Video.getAttribute('src') || './assets/videos/tolo.mp4')
        Video.play()
        light.style.backgroundColor = "green"
        light.style.boxShadow = "0 0 15px #0f0"
    } else {
        Video.pause()
        light.style.backgroundColor = "red"
        light.style.boxShadow = "0 0 15px #f00"
        Video.removeAttribute('src')
        Video.load()
    }
})
mute.addEventListener('click', () => {
    if (light.style.backgroundColor !== "green") return
    Video.muted = !Video.muted
    mute.style.backgroundColor = Video.muted ? "gray" : "green"
})
vol_n.addEventListener('click', () => {
    if (light.style.backgroundColor !== "green") return
    if (Video.muted) video.muted = false // اگر mute بود، صدا روشن شود
    Video.volume = Math.min(1, Video.volume + 0.1)
})

vol_p.addEventListener('click', () => {
    if (light.style.backgroundColor !== "green") return
    if (Video.muted) Video.muted = false
    Video.volume = Math.max(0, Video.volume - 0.1)
})


function playChannel(index) {
    if (light.style.backgroundColor !== "green") return
    currentChannel = index
    Video.setAttribute('src', chanels[currentChannel])
    Video.play()
}
d1.addEventListener('click', () => playChannel(0))
d2.addEventListener('click', () => playChannel(1))
page_up.addEventListener('click', () => {
    if (light.style.backgroundColor !== "green") return
    currentChannel = (currentChannel + 1) % chanels.length
    playChannel(currentChannel)
})
page_do.addEventListener('click', () => {
    if (light.style.backgroundColor !== "green") return
    currentChannel = (currentChannel - 1 + chanels.length) % chanels.length
    playChannel(currentChannel)
})
ok.addEventListener('click', () => {
    if (light.style.backgroundColor !== "green") return
    if(Video.paused){
        Video.play()
    } else {
        Video.pause()
    }
})
