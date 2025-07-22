const fires = document.getElementsByClassName("fire");

const toggleFire = document.getElementsByClassName("toggleFire")[0];

setTimeout(() => {
  toggleFire.disabled = false;
  toggleFire.addEventListener("click", () => {
    const currentDisplay = fires[0].style.display;
    // Toggle display for all fire elements
    for (let i = 0; i < fires.length; i++) {
      fires[i].style.display = "none";
    }
    
    // Start fade out animation
    document.body.classList.add('fade-out');
    
    // Redirect to YouTube after fade out completes
    setTimeout(() => {
      window.location.href = "https://www.youtube.com/watch?v=tALpVmhLgzc";
    }, 3000); // Wait 2 seconds for fade out animation to complete
  });
}, 6500);
