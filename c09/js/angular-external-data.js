// NOTE: Because this example loads external data it will not work locally in some browsers
// You can try it online at http://javascriptbook.com/code/c09 
// or run it on your own web server.

function TimetableCtrl ($scope, $http) {

/*
The path to the JSON file is relative to the HTML template, not the JavaScript file (even though the path is written in the JavaScript).
JustlikejQuery's .ajax() method,the$httpservice
has several shortcuts to make it easier to create
some requests. To fetch data it uses get(), post(), .. and j sonp ();to delete data it uses delete ();and to
create new records: put (). This example uses get ().
*/	
	$http.get('js/items.json');

/*
If t he request successfully fetches data, the code in the success() function runs. In this case, if it is successful the $scope object is passed the data from the JSON object. This allows the template to display the data.
*/
	.success( function(data)
				{

					$scope.sessions = data.sessions;
				});
/*
If it fails, the error () function is run instead. This would to show an error message to users.
*/
	.error( function (data) {
		
		console.log('error');
	});
}