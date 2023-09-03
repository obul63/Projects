const container1 = document.getElementById('container');
const container2 = document.getElementById('hero');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Display the second container when it enters the viewport
            container2.style.transition = 'opacity 1s'; // Apply transition to second container
            container2.style.display = 'flex';
            setTimeout(() => {
                container2.style.opacity = 1; // Make second container visible after delay
            }, 1000); // 1-second delay for opacity transition
        }
    });
}, { threshold: 0.5 });

observer.observe(container2);