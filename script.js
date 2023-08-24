function toggleLinks() {
    var links = document.querySelector('.links');
    // var button = document.querySelector('.icon-menu')
    links.style.visibility = (links.style.visibility === 'visible') ? 'hidden' : 'visible';
    
    links.style.height = (links.style.height === 'auto') ? '0' : 'auto';
    links.style.width = (links.style.width === 'auto') ? '0' : 'auto';
}
