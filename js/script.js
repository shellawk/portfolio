function goHome(){
    document.location.href = document.location.href + '/../index.html';
}
window.onload = () => {
    logo = document.getElementById('logo');
    logo.setAttribute('onclick', 'goHome()');
}