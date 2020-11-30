var container = document.createElement('div')
container.setAttribute('class', 'container1')
document.body.append(container)

var midele = document.createElement('div')
midele.classList = "middle"

container.append(midele);

var mid = document.createElement('div')
mid.classList = 'mid'
midele.append(mid);




function countdown(val, cb) {

    setTimeout(function () {

        mid.innerHTML = val;
        next9 = val - 1;
        cb(next9)

    }, 1000);
}


function count9(val, cb) {

    setTimeout(function () {

        mid.innerHTML = val;
        next8 = val - 1;
        cb(next8)

    }, 1000);
}


function count8(val, cb) {

    setTimeout(function () {

        mid.innerHTML = val;
        next7 = val - 1;
        cb(next7)

    }, 1000);
}



function count7(val, cb) {

    setTimeout(function () {

        mid.innerHTML = val;
        next6 = val - 1;
        cb(next6)

    }, 1000);
}



function count6(val, cb) {

    setTimeout(function () {

        mid.innerHTML = val;
        next5 = val - 1;
        cb(next5)

    }, 1000);
}




function count5(val, cb) {

    setTimeout(function () {

        mid.innerHTML = val;
        next4 = val - 1;
        cb(next4)

    }, 1000);
}



function count4(val, cb) {

    setTimeout(function () {

        mid.innerHTML = val;
        next3 = val - 1;
        cb(next3)

    }, 1000);
}


function count3(val, cb) {

    setTimeout(function () {

        mid.innerHTML = val;
        next2 = val - 1;
        cb(next2)

    }, 1000);
}



function count2(val, cb) {

    setTimeout(function () {

        mid.innerHTML = val;
        next1 = val - 1;
        cb(next1)

    }, 1000);
}



function count1(val,cb) {

    setTimeout(function () {

        mid.innerHTML = val;
        next0 = val - 1;
        cb(next0)

    }, 1000);
}


function count0() {

    setTimeout(function () {

        mid.innerHTML = 'Happy Birthday';
        console.log('finish')

    }, 1000);
}


countdown(10, function (nine) {

   


    count9(nine, function (eight) {





        count8(eight, function (seven) {


            count7(seven, function (six) {

      



                count6(six, function (five) {

              


                    count5(five, function (four) {

               



                        count4(four, function (three) {

                

                            count3(three, function (two) {

                     


                                count2(two, function (one) {

                            


                                    count1(one, function (zero) {

                                    
                                        count0(zero, function () {
                                            console.log('call back hell completed')
                                    

                                        });
    

                                    });


                                });

                            });

                        });

                    });

                });
            });
        });
    });
});

