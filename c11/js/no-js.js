/*

NO JAVASCRIPT
This chapter's accordion menu, tabbed panels,
and responsive slider all hide some of their content by default. This content would be inaccessible to visitors that do not have JavaScript enabled if we didn't provide alternative styling. One way to solve this is by adding a c1ass attribute whose value is no-js to the opening <html> tag. This class is then removed by JavaScript (using the repl ace() method of the String object) if JavaScript is enabled.
The no-j s class can then be used to provide styles targeted to visitors who do not have JavaScript enabled.
*/

var elDocument = document.documentElement;
elDocument.className = elDocument.className.replace(/(^|\s)no-js(\s|$)/, '$1');