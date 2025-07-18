document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  
  // Simple validation
  if (name && email && subject && message) {
    // Create a success message
    const successMsg = document.createElement('div');
    successMsg.style.cssText = `
      background: rgba(0, 255, 0, 0.1);
      border: 2px solid #00ff00;
      border-radius: 8px;
      padding: 1rem;
      margin-top: 1rem;
      color: #00ff00;
      text-align: center;
      font-weight: 700;
    `;
    successMsg.textContent = 'Message sent successfully! We will get back to you soon.';
    
    // Insert success message after the form
    this.parentNode.insertBefore(successMsg, this.nextSibling);
    
    // Clear form
    this.reset();
    
    // Remove success message after 5 seconds
    setTimeout(() => {
      successMsg.remove();
    }, 5000);
  }
});
