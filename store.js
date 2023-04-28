var form = document.querySelector('form');
form.addEventListener('submit', (event) =>{
   event.preventDefault();
   const name = document.querySelector('#name').value;
   const email = document.querySelector('#email').value;
   const UserDetails = {
     name : name,
     email : email
   };
   localStorage.setItem('Userdetails', JSON.stringify(UserDetails));
   alert('your details have been saved!');
});