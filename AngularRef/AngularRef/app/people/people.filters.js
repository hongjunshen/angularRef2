(function () {
    angular
        .module('app.people')
        .filter('fullName', fullName);

    function fullName() {
        return function (employee) {
            var firstName = employee.PreferredFirstName ? employee.PreferredFirstName : employee.FirstName;
            var lastName = employee.PreferredLastName ? employee.PreferredLastName : employee.LastName;

            return firstName + " " + lastName;
        };
    };
})();