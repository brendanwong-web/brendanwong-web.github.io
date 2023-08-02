scrollToMyRef = (event) => {
        
    refName = event.srcElement.innerHTML.toLowerCase()
    var ref = document.getElementById(refName);
    setTimeout(function () {
        ref.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
  }, 100);
  show()
  return false
  };

  gsap.registerPlugin(ScrollTrigger);
  var tl = gsap.timeline();

  window.onload = () => {
    tl.delay(1);
    gsap.from('#hi', {
      opacity: '0',
      y: '100px',
      duration: '1.5',
      ease: 'Power4.easeOut'
    })
    gsap.from('#skills h3', {
      scrollTrigger: {
        trigger: 'h3',
        start: 'top 80%',
      },
      stagger: 0.2,
      opacity: 0,
      duration: '0.5',
    })
    gsap.from(".bgimg.tree", { 
        y: 150,
        scale: 1.1,
        duration: 1,
        markers: true,
        scrollTrigger: {
          trigger: '#home',
          scrub: 0.5
        }
      });
    gsap.from(".bgimg.vine", { 
        y: 150,
        scale: 1.1,
        duration: 1,
        markers: true,
        scrollTrigger: {
          trigger: '#skills',
          scrub: 0.5
        }
      });
    gsap.from(".bgimg.vine2", { 
        y: 100,
        scale: 1.1,
        duration: 1,
        markers: true,
        scrollTrigger: {
          trigger: '#about',
          scrub: 0.5
        }
      });
  
  }
  
  var toggleBtn = document.getElementById('toggle-btn');
  toggleBtn.addEventListener('click' ,  show);

  function show(){
    var sideBar = document.getElementById('side-bar');
    sideBar.classList.toggle('active');
  }