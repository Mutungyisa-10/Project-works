const ffocus = () =>{
    let userid = document.signup.focus();
    return true;
}
const useridvalidate = (min, max) =>{
    let userid = document.signup.userid;
    var useridLen = userid.value.length;
    if(useridLen == 0 || useridLen >= max || useridLen < min){
        alert('first name shouldnot be empty/length be btn' + min + 'to' + max)
        userid.focus()
        return false;
    }
    document.signup.uid.focus();
    return true;
}