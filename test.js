var myObject = {
      egg: "plant",
      func: function() {
            var self = this;
            console.log("outer func: this.egg = " + this.egg);
            console.log("outer func: self.egg = " + self.egg);
           (function() {
            console.log("inner func: this.egg = " + this.egg);
            console.log("inner func: self.egg = " + self.egg);
            }());
       }
};
myObject.func();