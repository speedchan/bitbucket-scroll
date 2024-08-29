// Create the floating button
const button = document.createElement('button');
button.id = 'scroll-to-top';
button.textContent = '🔝';

// Add styles to the button
const style = document.createElement('style');
style.textContent = `
  #scroll-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 20px;
    font-size: 30px;
    color: white;
    border: none;
    cursor: pointer;
    z-index: 1000;

    background: rgba( 203, 203, 203, 0.2 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

  }

  #scroll-to-top:hover {
    background: rgba( 255, 151, 0, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
  }
`;
document.head.appendChild(style);

// Append the button to the body
document.body.appendChild(button);

// Add click event to scroll to top
button.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'instant'
  });
});
