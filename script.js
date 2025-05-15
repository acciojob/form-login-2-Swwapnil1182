//your JS code here. If required.
function click(){

	const firstName=document.getElementById("fname").value.trim()
	const LastName=document.getElementById("lname").value.trim()
	const phone=document.getElementById("phone").value.trim()
	const emailid=document.getElementById("emailid").value.trim()

	const msg=``
	
	alert(`First Name: ${firstName} Last Name: ${LastName} Phone Number: ${phone} Email ID: ${emailid}`);
}