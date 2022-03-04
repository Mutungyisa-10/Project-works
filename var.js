const ffocus=()=>{
    let uid = document.register.userid.focus();
    return true;
}
const userIdvalidate=(min,max)=>{
    let uid = document.register.userid;
    var uidLen = uid.value.length;
    if(uidLen == 0 || uidLen >= max||uidLen < min){
        alert('userid shouldnot be empty/length be btn'+ min + 'to' + max)
        uid.focus()
        return false;
    }
    document.register.passid.focus();
        return true;
}
const passidvalidate = (min, max) => {
    let passid = document.register.passid;
    var passlength = passid.value.length;
    if(passlength == 0 || passlength >= max||passlength < min){
        alert('passid shouldnot be empty/length be btn'+ min + 'to' + max)
        passid.focus()
        return false;
    }
    document.register.username.focus();
        return true;
}
const usernamevalidate = (min, max) => {
    let username = document.register.username;
    var usernamelen = username.value.length;
    if(usernamelen == 0 || usernamelen >=max || usernamelen < min){
        alert('username should not be'+min + 'to' +max)
        username.focus()
        return false;
    }
    document.register.address.focus();
        return true;
}
const addressvalidate = () => {
    let address = document.register.address
    //the lower value is called a regular expressions
    //these help to munuplate strings
    let comp = /^[0-9a-zA-z]+$/
    if (address.value.match(comp)){
        //here we a focusing on the next field.
        document.register.country.focus();
        return true
    }
    else{
        alert('use alphanumeric characters')
        address.focus()
        return false
    }
}
const countryvalidate = () => {
    let country =document.register.country
    if(country.value =='Default'){
        alert('please select one of the above countries')
        country.focus()
        return false
    }
    else{
        document.register.
        postal.focus()
        return true
    }
}