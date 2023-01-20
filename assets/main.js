


const submitBtn = document.querySelector("#submit_btn");

submitBtn.addEventListener("click", () => {
    const oldpassword = document.querySelector("#old_password").value;
    const newpassword = document.querySelector("#new_password").value;
    console.log(`kohne sifre : ${oldpassword} - yeni sifre : ${newpassword}`);
        // document.querySelector("#old_password").value = "";
        // document.querySelector("#new_password").value = "";



if(oldpassword == "" || newpassword == ""){
    alert("xanaları doldurun")
}else if (oldpassword === newpassword){
    alert("UĞURLU!") 
   }

if (oldpassword != newpassword) {
       alert(  "daxil etdiyiniz şifrə uyğun deyil" )
    
   }

    // console.log(`kohne sifre : ${oldpassword} - yeni sifre : ${newpassword}`);
     document.querySelector("#old_password").value = "";
     document.querySelector("#new_password").value = "";


  

  
});

