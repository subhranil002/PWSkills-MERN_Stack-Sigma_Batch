// Function to generate the blog Post
function generateBlogPost(data) {
    // Create the main container
    const blogContainer = document.createElement("div");
    blogContainer.className =
        "w-[250px] shadow-[0_1px_3px_2px_rgba(0,0,0,0.3)] rounded-lg flex flex-col justify-between items-center py-5 gap-3 overflow-hidden";
    blogContainer.id = data.id;

    // Create the image element
    const image = document.createElement("img");
    image.className = "rounded-lg w-[200px] h-[200px] object-cover";
    image.src =
        data.imageUrl ||
        "https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg";
    image.alt = "image";

    // Create the content container
    const contentContainer = document.createElement("div");
    contentContainer.className = "w-[200px] flex flex-col gap-3";

    // Create the title element
    const title = document.createElement("h1");
    title.className = "font-semibold text-base";
    const truncatedTitle = data.title.slice(0, 45);
    const finalTitle =
        data.title.length > 53 ? truncatedTitle + "..." : truncatedTitle;
    title.textContent = finalTitle;

    // Create the description element
    const description = document.createElement("p");
    description.className = "text-sm text-gray-900";
    const truncatedDescription = data.description.slice(0, 55);
    const finalDescription =
        data.description.length > 58
            ? truncatedDescription + "..."
            : truncatedDescription;
    description.textContent = finalDescription;

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
    blogsContainer.appendChild(blogContainer);
}

// Retrive Data from Local Storage
let blogArray = [];
function getBlogDataFromLocalStorage() {
    const storedBlogArray = localStorage.getItem("blogDataArray");
    blogArray = JSON.parse(storedBlogArray);

    if (blogArray) {
        blogArray.forEach((blogData) => {
            generateBlogPost(blogData);
        });
    }
}
getBlogDataFromLocalStorage();

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

// Set New Blog Data To Local Storage
function createNewBlog() {
    const id = Math.random();
    const imageUrl = document.getElementById("imageUrl").value;
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const readContent = document.getElementById("readContent").value;

    if (!title || !description || !readContent) {
        return false;
    }

    const blogData = {
        id,
        imageUrl,
        title,
        description,
        readContent,
    };

    if (blogArray) {
        blogArray = [...blogArray, blogData];
    } else {
        blogArray = [blogData];
    }

    localStorage.setItem("blogDataArray", JSON.stringify(blogArray));
    togglePopup();
    location.reload();
}

// Get Read Button Clicked Blog
document.querySelector("#blogs").addEventListener("click", function (e) {
    if (e.target.id === "readMore") {
        console.log(e.target.parentElement);
    }
});
