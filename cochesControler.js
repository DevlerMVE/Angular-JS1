(function () {
    //obtenemos el modulo y le añadimos un controlador. (getModule(){};)
    angular.module('misCoches').controller('cochesControler', implCochesControler);

    function initForm(self) {
        self.marcaIntroducida = undefined;
        self.modeloIntroducido = undefined;

        self.placeholderMarca = 'Marca del coche';
        self.placeholderModelo = 'Modelo del coche';
    }

    function implCochesControler() {
        var self = this;
        initForm(self);


        self.nuevoCoche = {
            marca: "",
            modelo: ""
        };

        self.coches = [];

        self.guardar = function () {
            if (self.marcaIntroducida != undefined || self.marcaIntroducida != undefined) {
                self.nuevoCoche.marca = self.marcaIntroducida;
                self.nuevoCoche.modelo = self.modeloIntroducido;
                var auxCopyCoche = angular.copy(self.nuevoCoche);
                self.coches.push(auxCopyCoche);
                initForm(self);
            }
        }
    }

}());
