document.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementById('animatedElement');
    let position = 0;
    const speed = 2;

    function animate() {
        position += speed;
        element.style.left = position + 'px';

        if (position > window.innerWidth) {
            position = -element.offsetWidth;
        }

        requestAnimationFrame(animate);
    }

    animate();

    const followElement = document.getElementById('followElement');

    document.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
    
        const header = document.querySelector('header');
        
        const headerRect = header.getBoundingClientRect();

        const isInHeader = mouseY >= headerRect.top && mouseY <= headerRect.bottom && mouseX >= headerRect.left && mouseX <= headerRect.right;
    
        followElement.style.left = mouseX + 'px';
        followElement.style.top = mouseY + 'px';
    
        if (isInHeader) {
            followElement.style.color = 'white';
        } else {
            followElement.style.color = 'black';
        }
        const listItems = document.querySelectorAll('nav ul li a');
        listItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            });
        });
    }); 
});



   