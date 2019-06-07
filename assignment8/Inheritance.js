(function () {
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