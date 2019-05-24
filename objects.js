const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

class Lesson extends EventEmitter
{
    constructor(name, duration){
        super();
        this._name = name;
        this._duration = duration;
    }

    get name(){
        return this._name;
    }

    get duration() {
        return this._duration;
    }

    set name(name) {
        this._name = name;
    }

    set duration(duration) {
        this._duration = duration
    }
}

class Room extends EventEmitter{
    constructor(roomNumber, slot9, slot10, slot11, slot12, slot13, slot14, slot15, slot16) {
        super();
        this._roomNumber = roomNumber;
        this._slot9 = slot9;
        this._slot10 = slot10;
        this._slot11 = slot11;
        this._slot12 = slot12;
        this._slot13 = slot13;
        this._slot14 = slot14;
        this._slot15 = slot15;
        this._slot16 = slot16;
    }

    
}
module.exports = {Lesson : Lesson, Room : Room};
// NOTE I NEED TO EXPORT THOSE OBJECTS