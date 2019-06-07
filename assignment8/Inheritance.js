(function () {
    'use strict';
    function createBicyclePrototye() {
    var obj = {
        speed: 0,
        applyBrake : function (value) {
            this.speed -= value;
        },
        speedup: function (value) {
            this.speed += value;
        }

    };
    return obj;
}
function createMountainBikeProtoype(proto) {
    var objProto = Object.create(proto);
        objProto.gear = 1;
        objProto.setGear = function (gearval) {
            this.gear = gearval;
        }
       return objProto;
}

function start() {
   var bicyclePrototype = Object.create(createBicyclePrototye());
   var mountainBikePrototype = Object.create(bicyclePrototype);

   console.log(bicyclePrototype.speed);
    bicyclePrototype.speedup(20);
    console.log(bicyclePrototype.speed);

    console.log(mountainBikePrototype.speed);
    mountainBikePrototype.speedup(10);
    mountainBikePrototype.speedup(10);
    mountainBikePrototype.applyBrake(10);
    console.log(mountainBikePrototype.speed);
    //mountainBikePrototype.setGear(10);
    console.log(mountainBikePrototype.hasOwnProperty('gear'));

}
start();
})();
/* this is the class implementation of the above code
class CreateBicyclePrototye{
    constractor(speed){
        this._speed = speed;
    }
     applyBrake(value) {
        this._speed -= value;
    }
     speedup(value) {
        this._speed += value;
    }
    getSpeed(){
        return this._speed;
    }

}

class CreateMountainBikeProtoype extends CreateBicyclePrototye {


    constractor(speed) {
        super.constractor(speed);
        this._gear = 1;
    }


    setGear(gearval) {
        this._gear = gearval;
    }
}
var bicyclePrototype = new CreateBicyclePrototye(0);
var mountainBikePrototype = new CreateMountainBikeProtoype(0);
bicyclePrototype.speedup(10);
console.log(bicyclePrototype.getSpeed());


 */