var app = angular.module("myApp", []).controller("insertDatesCrtl", ($scope) => {

    var btnEnviar = document.querySelector("#btnEnviar");

    btnEnviar.addEventListener("click", () => {

            var tbody = document.querySelector("#tbody");
            var tr = document.createElement('tr');
            var td1= document.createElement('td');
            var td2= document.createElement('td');
            var td3= document.createElement('td');

            td1.innerText = $scope.name;
            td2.innerText = $scope.mail;
            td3.innerText = $scope.address;

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);

            tbody.appendChild(tr)


    })
})