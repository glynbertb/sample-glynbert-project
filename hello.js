

function getRandomBibleVerse() {
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
    const randomVerse = verses[Math.floor(Math.random() * verses.length)];
    return randomVerse;
}

function showRandomBibleVerse() {
    const verse = getRandomBibleVerse();
    console.log(`Verse: ${verse.reference}`);
    console.log(`Text: ${verse.text}`);
    console.log(`Insight: ${verse.insight}`);
}

showRandomBibleVerse()