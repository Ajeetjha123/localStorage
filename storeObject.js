var form = document.querySelector('form');
form.addEventListener('submit', (event) =>{
   event.preventDefault();
   const name = document.querySelector('#name').value;
   const email = document.querySelector('#email').value;
   const UserDetails = {
     name : name,
     email : email
   };
   const exisitingDetails = JSON.parse(localStorage.getItem('UserDetails')) || [];
         exisitingDetails.push(UserDetails);
   localStorage.setItem('Userdetails', JSON.stringify(exisitingDetails));
   alert('your details have been saved!')
});