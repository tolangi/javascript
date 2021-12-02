const image_array=['bnner.jpg','SOCIAL MEDIA BANNER.jpg','680879648750649.jpg']
let array_length=image_array.length
let i=0
let set=setInterval(slider,5000)

function slider(){
    i++
    i=i%array_length
    document.getElementById('image').src=`images/${image_array[i]}`
}
function next(){
    i++
    i=i%array_length
    document.getElementById('image').src=`images/${image_array[i]}`
}

function pre(){
    i--
    0 1 2 3 4
    1 0 -1 -2
    from 0 t0m 4
    document.getElementById('image').src=`images/${image_array[i]}`

}