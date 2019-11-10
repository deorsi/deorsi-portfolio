(function() {
    /* setModeEventListener(); */
    setAboutEventListener();
  })();

/* Dark Mode Toggler 

function setModeEventListener() {
    let list = document.body.classList;
    document.getElementById('toggler').addEventListener('change', event => {
      event.target.checked ? list.add('dark-mode') : list.remove('dark-mode');
    });
  }

*/
/* About Toggler */

function setAboutEventListener() {
    Array.from(document.getElementsByTagName('button')).forEach(e => {
      e.addEventListener('click', aboutToggle);
    });
  }
  
  function aboutToggle(e) {
    let aboutType = e.target;
    off(aboutType);
    document.getElementsByClassName(aboutType.id)[0].classList.add('show');
  }
  
  function off(aboutType) {
    Array.from(document.getElementsByClassName('about')).forEach(e => {
      e.classList.remove('show');
    });
  }
  