// This is the main JavaScript file for your church website.
// JavaScript is used to make your website interactive (respond to clicks, show messages, etc).
// Every section below is explained for absolute beginners.

// This array contains Bible verses, their text, and an insight for each verse.
const verses = [
    {
        reference: 'John 3:16',
        text: 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.',
        insight: 'This verse highlights the depth of God’s love and the promise of eternal life through faith.'
    },
    {
        reference: 'Genesis 1:1',
        text: 'In the beginning God created the heavens and the earth.',
        insight: 'This verse reminds us of God’s power as the Creator of all things.'
    },
    {
        reference: 'Psalm 23:1',
        text: 'The Lord is my shepherd; I shall not want.',
        insight: 'God provides, guides, and cares for us like a shepherd cares for his sheep.'
    },
    {
        reference: 'Philippians 4:13',
        text: 'I can do all things through Christ who strengthens me.',
        insight: 'With Christ’s strength, we can overcome any challenge.'
    },
    {
        reference: 'Proverbs 3:5',
        text: 'Trust in the Lord with all your heart and lean not on your own understanding;',
        insight: 'Trusting God fully brings wisdom and peace.'
    }
];

// This function picks a random verse from the array above
function getRandomBibleVerse() {
    // Math.random() gives a random number between 0 and 1
    // Multiply by the number of verses, then round down to get a valid index
    return verses[Math.floor(Math.random() * verses.length)];
}

// This function displays a random verse and its insight on the page
function showRandomBibleVerse() {
    // Get a random verse object
    const verse = getRandomBibleVerse();
    // Find the HTML elements by their IDs and set their text
    document.getElementById('verse-reference').textContent = verse.reference;
    document.getElementById('verse-text').textContent = verse.text;
    document.getElementById('verse-insight').textContent = verse.insight;
}

// When the page loads, show a random verse automatically
// 'DOMContentLoaded' means the HTML is ready
document.addEventListener('DOMContentLoaded', showRandomBibleVerse);

// --- Navigation Menu Functionality ---
// This part makes the menu links scroll smoothly and highlight the active section

// Get all menu links (with class 'menu-link')
const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach(link => {
    // When a menu link is clicked...
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Stop the default jump
        const targetId = this.getAttribute('href').substring(1); // Get the section name (without #)
        const targetSection = document.getElementById(targetId); // Find the section in the page
        if (targetSection) {
            // Scroll smoothly to the section
            window.scrollTo({
                top: targetSection.offsetTop - 20, // Go to the section, a bit above
                behavior: 'smooth'
            });
        }
    });
});

// Highlight the menu link for the section currently on screen
window.addEventListener('scroll', () => {
    let fromTop = window.scrollY + 80; // Current scroll position
    menuLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add('active'); // Add highlight
        } else {
            link.classList.remove('active'); // Remove highlight
        }
    });
});

// --- Prayer Request Form Functionality ---
// This part handles the prayer request form submission
const prayerForm = document.getElementById('prayer-form');
if (prayerForm) {
    prayerForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Stop the page from reloading
        document.getElementById('prayer-success').style.display = 'block'; // Show thank you message
        prayerForm.reset(); // Clear the form fields
        setTimeout(() => {
            document.getElementById('prayer-success').style.display = 'none'; // Hide message after 4 seconds
        }, 4000);
    });
}
