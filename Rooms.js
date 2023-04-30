<script type="text/javascript">
 function validation()
 {
 var N,E,P,B,A,X;
 N=document.getElemenById('Name').value;
 E=document.getElemenById('email').value;
 P=document.getElemenById('phonenumber').value;
 B=document.getElemenById('bookingdate').value;
 A=document.getElemenById('Application').value;
 if (N=='' || E='' || P='' || B='' || A='')
 alert("please fill all the details given below");
22
 else
 alert("YOUR REGISTRATION IS SUCESSFUL");
 
 }
 </script>