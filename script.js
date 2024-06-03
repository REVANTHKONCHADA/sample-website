// JavaScript code for social links functionality

// Get the social links container element
const socialLinks = document.querySelector('.social-links');

// Define the social media URLs
const linkedinURL = 'https://www.linkedin.com';
const githubURL = 'https://github.com';
const instagramURL = 'https://www.instagram.com';
const twitterURL = 'https://twitter.com';

// Add event listeners to the social links
socialLinks.addEventListener('click', function(event) {
  // Check if a social link is clicked
  if (event.target.tagName === 'I') {
    // Get the clicked social link
    const socialLink = event.target.parentNode;

    // Get the corresponding social media URL based on the class name
    let url;
    if (socialLink.classList.contains('fa-linkedin')) {
      url = linkedinURL;
    } else if (socialLink.classList.contains('fa-github')) {
      url = githubURL;
    } else if (socialLink.classList.contains('fa-instagram')) {
      url = instagramURL;
    } else if (socialLink.classList.contains('fa-twitter')) {
      url = twitterURL;
    }

    // Open the social media URL in a new tab
    window.open(url, '_blank');
  }
});
