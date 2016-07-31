(function () {
    'use strict';

    angular.module('myapp')
        .controller('UserController', function () {
            var self = this;
            self.months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
            self.days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
            self.item = '';
            self.existsItem = -1;

            self.addMonth = function (name) {
                self.months.push(name);
            }
            //comentario par la rama developer

            self.addDay = function (name) {
                if (!name) return;

                var exits = self.existsDay(name);
                if (!exits) {
                    self.days.push(name);
                } else {
                    self.existsItem = self.days.indexOf(name, 0);
                }
                self.name = '';
            }
//nuevo comentario de master
            self.removeDay = function (index) {
                self.existsItem = -1;
                self.days.splice(index, 1);
            }
            self.existsDay = function (item) {
                self.item = item;
                var res = self.days.some(existsItem);
                return res;
            }


            function existsItem(item, index, array) {
                return self.item === item;
            }
        });
})();             