function msg1(){
    console.log('hello world_1')
    msg2()
}
function msg2(){
    console.log('hello world_2')
    msg3()
}
function msg3(){
    console.log('hello world_3')
    msg4()
}
function msg4(){
    console.log('hello world_4')
    // msg2()
}

msg1()