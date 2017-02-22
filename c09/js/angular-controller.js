// Below, look at the angular-contro11er.jsfile. Itusesaaconstructorfunctiontocreateanobject called BasketCtrl. This object is known as a controller or ViewModel. It is passed another object called $scope as an argument. Properties of the $scope object are set in the constructor function.

/*

It is also possible to evaluate expressions inside the curly braces. In step 3, the subtotal is calculated in the template. This is then formatted as a currency. Furthermore, if you update the quantity in the form, the underlying data model (in the JavaScript object) is updated along with the subtotal. Try updating
the values in the JavaScript file, then refreshing the HTML to see the connection. This is an example of something programmers call data binding; the data in the JavaScript file is bound to the HTML and vice- versa. If the ViewModel changes, the view updates. If the view changes, the ViewModel updates.
As this shows, Angular is particularly helpful when you load data from a separate file into the view.
A page can have multiple controllers, each of which has its own scope. In the HTML, the ng- contro11er attribute is used on an element to define the scope of that controller. This is similar to variable scope. For example, a different element might have a different controller (e.g., StoreCtr1), and both controllers would be able to have a property called description. Because the scope is only within that element, each controller's description property would only be used within that controller's scope.

*/
function BasketCtrl ($scope) {
	
	$scope.description = 'Single ticket';
	$scope.cost = 8;
	$scope.qty = 1;
}