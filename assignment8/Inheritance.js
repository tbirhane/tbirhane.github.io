function createBicyclePrototye() {
    var obj = {
        speed: 0,
        applyBrake : function (value) {
            speed -= value;
        },
        speedup: function (value) {
            speed += value;
        }

    };
    return obj;
}
function createMountainBikeProtoype(proto) {
    var objProto = Object.create(proto);
        objProto.gear = 1;
        objProto.setGear = function (gearval) {
            objProto.gear = gearval;
        }
       return objProto;
}

function start() {
    
}