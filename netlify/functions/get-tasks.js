// এই কোডটি Netlify-এর সার্ভারে চলবে এবং আপনার অ্যাপকে টাস্কের তালিকা পাঠাবে।

exports.handler = async function (event, context) {
    
    // নিচে টাস্কগুলোর একটি তালিকা দেওয়া হলো।
    // আপনি এখানে আপনার প্রয়োজনমতো টাস্ক যোগ করতে, বাদ দিতে বা পরিবর্তন করতে পারেন।
    const availableTasks = [
        {
            uniqueCardId: 'task-1',
            visitLink: 'https://www.google.com',
            time: 5,
            taskId: 'google-task-01',
            currentTitle: 'Visit Google Search',
            subtitle: 'Spend 5 seconds on the Google homepage.',
            photoLink: 'https://i.imgur.com/O6t6h0d.png', // একটি স্যাম্পল ছবি
            amount: 15,
            timeFormatted: '5 Sec'
        },
        {
            uniqueCardId: 'task-2',
            visitLink: 'https://www.youtube.com',
            time: 10,
            taskId: 'youtube-task-02',
            currentTitle: 'Watch a Short Video',
            subtitle: 'Spend 10 seconds on YouTube.',
            photoLink: 'https://i.imgur.com/O6t6h0d.png', // একটি স্যাম্পল ছবি
            amount: 25,
            timeFormatted: '10 Sec'
        },
        {
            uniqueCardId: 'task-3',
            visitLink: 'https://www.wikipedia.org',
            time: 8,
            taskId: 'wiki-task-03',
            currentTitle: 'Read a Wiki Article',
            subtitle: 'Spend 8 seconds on Wikipedia.',
            photoLink: 'https://i.imgur.com/O6t6h0d.png', // একটি স্যাম্পল ছবি
            amount: 20,
            timeFormatted: '8 Sec'
        }
    ];

    // নিচের অংশটি ব্রাউজারকে টাস্কের তালিকাটি সঠিকভাবে ফেরত পাঠাবে।
    return {
        statusCode: 200, // এর মানে হলো সবকিছু সফলভাবে কাজ করেছে।
        headers: {
            'Access-Control-Allow-Origin': '*', // এটি CORS বা "Failed to fetch" সমস্যার সমাধান করে।
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(availableTasks) // টাস্কের তালিকাকে টেক্সট ফরম্যাটে পরিণত করে পাঠানো হচ্ছে।
    };
};
