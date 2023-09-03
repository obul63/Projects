const closeBtn1 = document.querySelector('.close-button a')
const closeBtn2 = document.querySelector('.close-button b')
const leftPopup = document.querySelector('.left-side')
const rightPopup = document.querySelector('.right-side');

document.getElementById('myImage').addEventListener('click', function(event) {
  const imageElement = event.target;
  const imageRect = imageElement.getBoundingClientRect();
  const clickX = event.clientX - imageRect.left;

  // Get the width of the image and calculate the mid-point
  const imageWidth = imageRect.width;
  const midPoint = imageWidth / 2;

  // Show the appropriate pop-up based on the click position
  if (clickX <= midPoint) {
    // Clicked on the left side
    // const leftPopup = document.querySelector('.left-side');
    leftPopup.style.display = 'block';
  } else {
    // Clicked on the right side
    // const rightPopup = document.querySelector('.right-side');
    rightPopup.style.display = 'block';
  }
});

// function closeLeftPopup() {
//   const leftPopup = document.querySelector('.left-side')
//   leftPopup.style.display = 'none';
// }

// function closeRightPopup() {
//   const rightPopup = document.querySelector('.right-side');
//   rightPopup.style.display = 'none';
// }

function closeLeftPopup() {
  closeBtn1.addEventListener('click',function(e) {
    const btn1 = e.target
    
    console.log('closed')
  });
}
closeLeftPopup();













// // Close pop-ups when clicking outside the pop-up area
// document.addEventListener('click', function(event) {
//   const leftPopup = document.getElementById('leftPopup');
//   const rightPopup = document.getElementById('rightPopup');

//   if (!leftPopup.contains(event.target)) {
//     leftPopup.style.display = 'none';
//   }

//   if (!rightPopup.contains(event.target)) {
//     rightPopup.style.display = 'none';
//   }
// });

// closeModalButtons.forEach(button => {
//   button,addEventListener('click', () => {
//   // leftPopup.style.display = 'none';
//   // rightPopup.style.display = 'none';
//   console.log('button clicked')
    
//   })
// })











// closeModalButtons.forEach(button => {
//   button.addEventListener('click', () =>{
//       const modal = button.closest('.modal')
//       closeModal(modal)
//   })
// })

// function closeModal(modal) {
//   if (modal == null) return
//   // modal.classList.remove('active')
//     modal.rightPopup.style.display = 'none';
//     modal.leftPopup.style.display = 'none';

//   // overlay.classList.remove('active')
// }