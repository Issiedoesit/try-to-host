
document.addEventListener("DOMContentLoaded", function(event) {

// THIS FUNCTION GETS CALLED WHENEVER A SPAN18 ELEMENT (OR ELEMENTS) COME INTO OR GO OUT OF VIEW
function callback (observations, observer) {
observations.forEach(observation => {
    if (observation.isIntersecting) { //IF IT'S IN VIEW
    observation.target.classList.add('animated');
    }
    else {
    observation.target.classList.remove('animated');
    }      
});
}
          
    // CREATE AN INTERSECTION OBSERVER
    let options = {
        root: null, //null means it will observe on the viewport
        rootMargin: '0px',
        threshold: 1.0 //1 means the whole element needs to be viewable before we animate it
    }

    let observer = new IntersectionObserver(callback, options);
    
    // NOW PUT THE OBSERVER ON EACH OF THE ELEMENTS WE WANT TO ANIMATE WHEN IT'S IN VIEW
    let spans = document.querySelectorAll('#appear');
    for (let i=0; i< spans.length; i++) {
    observer.observe(spans[i]); 
    }
});


document.addEventListener("DOMContentLoaded", function(event) {

    // THIS FUNCTION GETS CALLED WHENEVER A SPAN18 ELEMENT (OR ELEMENTS) COME INTO OR GO OUT OF VIEW
    function callback (observations, observer) {
    observations.forEach(observation => {
        if (observation.isIntersecting) { //IF IT'S IN VIEW
        observation.target.classList.add('animated2');
        }
        else {
        observation.target.classList.remove('animated2');
        }      
    });
    }
              
        // CREATE AN INTERSECTION OBSERVER
        let options = {
            root: null, //null means it will observe on the viewport
            rootMargin: '0px',
            threshold: 1.0 //1 means the whole element needs to be viewable before we animate it
        }
    
        let observer = new IntersectionObserver(callback, options);
        
        // NOW PUT THE OBSERVER ON EACH OF THE ELEMENTS WE WANT TO ANIMATE WHEN IT'S IN VIEW
        let spans = document.querySelectorAll('#appeared');
        for (let i=0; i< spans.length; i++) {
        observer.observe(spans[i]); 
        }
    });
    
    

