
//aqui inicializo  angular
var app = angular.module('myApp', []);
// app.controller('MyController', ['$scope', myController]);
app.controller('MyController', function ($scope) {

    var excelJsonObj = [];
    var arreglo1 = [];
    var arreglo2 = [];


    $scope.uploadExcel = function () {
        //  alert('working ...')
        var myFile = document.getElementById('file');
        var input = myFile;
        var reader = new FileReader();
        reader.onload = function () {
            var fileData = reader.result;
            var workbook = XLSX.read(fileData, { type: 'binary' });
            workbook.SheetNames.forEach(function (sheetName) {
                var rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                excelJsonObj = rowObject;
            });
            for (var i = 0; i < excelJsonObj.length; i++) {
                var data = excelJsonObj[i];

                $('#myTable tbody:last-child').append("<tr><td>" + data.wavelength + "</td><td>" + data.intensity + "</td></tr>");
                //agrego la variable $scope.mensaje el archivo json que contine los datos del documento
                $scope.envio = excelJsonObj[i];
                arreglo1[i] = parseFloat(data.wavelength);
                arreglo2[i] = parseFloat(data.intensity);


            }

        };



        reader.readAsBinaryString(input.files[0]);



    };



    $scope.LeerExcel = function () {




        for (i = 1; i < excelJsonObj.length + 1; i++) {

           // console.log(arreglo[i]);
           // console.log("new");
        }
             $scope.mensaje1 = arreglo1;
             $scope.mensaje2 = arreglo2;
        //   $scope.mensaje.wavelength[i];
        // $scope.mensaje=$scope.envio[i];
        //return $scope.mensaje=excelJsonObj;

    };

});
