// Control Popup On/Off
const togglePopup = () => {
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");

    if (popup.style.display === "none") {
        popup.style.display = "flex";
        overlay.style.display = "block";
        document.body.style.overflow = "hidden";
    } else {
        popup.style.display = "none";
        overlay.style.display = "none";
        document.body.style.overflow = "auto";
    }
};

// Get Read Button Clicked Blog
document.querySelector("#blogs").addEventListener("click", function (e) {
    if (e.target.id === "readMore") {
        console.log(e.target.parentElement);
    }
});

// Sample data for the blog post
const blogData = {
    imageUrl: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit"
};

// Function to generate the blog post HTML
function generateBlogPost(data) {
    // Create the main container
    const blogContainer = document.createElement("div");
    blogContainer.className = "w-[250px] shadow-[0_1px_3px_2px_rgba(0,0,0,0.3)] rounded-lg flex flex-col justify-between items-center py-5 gap-3";

    // Create the image element
    const image = document.createElement("img");
    image.className = "rounded-lg w-[200px] h-[200px] object-cover";
    image.src = data.imageUrl;
    image.alt = "image";

    // Create the content container
    const contentContainer = document.createElement("div");
    contentContainer.className = "w-[200px] flex flex-col gap-3";

    // Create the title element
    const title = document.createElement("h1");
    title.className = "font-semibold text-base";
    title.textContent = data.title;

    // Create the description element
    const description = document.createElement("p");
    description.className = "text-sm text-gray-900";
    description.textContent = data.description;

    // Create the "Read More" button
    const readMoreBtn = document.createElement("button");
    readMoreBtn.id = "readMore";
    readMoreBtn.className = "w-[200px] bg-red-100 py-1 text-red-400 rounded-md";
    readMoreBtn.textContent = "Read";

    // Append elements to their respective containers
    contentContainer.appendChild(title);
    contentContainer.appendChild(description);

    blogContainer.appendChild(image);
    blogContainer.appendChild(contentContainer);
    blogContainer.appendChild(readMoreBtn);

    const blogsContainer = document.getElementById("blogs");
    blogsContainer.appendChild(blogContainer)
}

generateBlogPost(blogData);

