var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint; 

//Store elements
elForm = document.getElementById('formSignup');
elSelectPackage = document.getElementById('package');
elPackageHint = document.getElementById('packageHint');
elTerms = document.getElementById('terms');
elTermsHint = document.getElementById('termsHint');

function packageHint () {
	
	var pack = this.options[this.selectedIndex].value; // Get selected option

	if (pack === 'monthly') { //If monthly package
		elPackageHint.innerHTML = 'Save $10 if you pay for 1 year!';//Show this msg
	}
	else {
		elPackageHint.innerHTML = 'Wise Choice';  // Show this message
	}
}

function checkTerms (event) {
	
	if (!elTerms.checked) { // If checkbox ticked

		elTermsHint.innerHTML = 'You must agree to the terms.'; // Show message
		event.preventDefault(); // Don't submit form
	}
}

//Create event listeners: submit calls checkTerms, change calls packageHint
elForm.addEventListener('submit', checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false);