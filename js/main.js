// intro gallery
document.addEventListener('DOMContentLoaded', () => {
    const introGallery = [
        "https://i.ibb.co.com/dpHcvLn/rem-13.jpg",
        "https://i.ibb.co.com/B5nCysK7/8.jpg",
        "https://i.ibb.co.com/1MMkPfz/belle-3.jpg",
        "https://i.ibb.co.com/dkGWmCh/nero-8.jpg",
    ];

const container = document.getElementById('intro_container');

introGallery.forEach(url => {
    const div = document.createElement("div");
    div.className = "group relative";

    const img = document.createElement('img');
    img.src = url;
    img.alt = 'intro-image';
    img.className = "w-64 lg:w-72 rounded-lg shadow-lg transform transition-transform duration-300 pointer-events-none";
    
    div.appendChild(img);
    container.appendChild(div);
});

});


// Main gallery 
document.addEventListener('DOMContentLoaded', () => {
    const mainGallery = [
        'https://i.ibb.co.com/MZTvHJm/ganyu-12.jpg',
        'https://i.ibb.co.com/JczMjQ6/seta-28.jpg',
        'https://i.ibb.co.com/kKVXHxX/sparkle-1.jpg',
        'https://i.ibb.co.com/P4NSRHv/pompom-5.jpg',
        'https://i.ibb.co.com/Q8jgSPd/maid-15.png',
        'https://i.ibb.co.com/KhJ3D3J/kobo-4.jpg',
        'https://i.ibb.co.com/HHCdD15/d-va-8.jpg',
        'https://i.ibb.co.com/HqFwNMV/aurel-20.png',
        'https://i.ibb.co.com/kqnHMG8/shikomori-4.png',
        'https://i.ibb.co.com/Zd4pyKM/biboo-3.jpg',
        'https://i.ibb.co.com/7jZSQD9/maid-6.png',
        'https://i.ibb.co.com/9hKWRLY/yoimiya-7.png',
        "https://i.ibb.co.com/mG6mWTL/esdeath-3.png",
        "https://i.ibb.co.com/1MWqRh5/zeela-10.jpg",
        "https://i.ibb.co.com/BK9Wm60/violet-2-dreamy.png"
    ];

const container = document.getElementById('image_container');

mainGallery.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Gallery Image';
    img.className = 'transform transition-transform duration-300 hover:scale-125'; // Tailwind CSS classes
    container.appendChild(img);
});

});