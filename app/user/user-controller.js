(function () {
    'use strict';

    angular.module('myapp')
        .controller('UserController', function () {
            var self = this;
            self.months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
            self.days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
            self.addMonth = function (name) {
                self.months.push(name);
            }
            self.addDay = function (name) {
                self.days.push(name);
            }
            self.removeDay = function (index) {
                self.days.splice(index, 1);
            }
        });
})();             