// Function to generate the blog Post
function generateBlogPost(data) {
    const blogContainer = document.createElement("div");
    blogContainer.className =
        "w-[250px] shadow-[0_1px_3px_2px_rgba(0,0,0,0.3)] rounded-lg flex flex-col justify-between items-center py-5 gap-3 overflow-hidden";
    blogContainer.id = data.id;

    const image = document.createElement("img");
    image.className = "rounded-lg w-[200px] h-[200px] object-cover";
    image.src = data.imageUrl;
    image.alt = "image";

    const contentContainer = document.createElement("div");
    contentContainer.className = "w-[200px] flex flex-col gap-3";

    const title = document.createElement("h1");
    title.className = "font-semibold text-base";
    const truncatedTitle = data.title.slice(0, 45);
    const finalTitle =
        data.title.length > 53 ? truncatedTitle + "..." : truncatedTitle;
    title.textContent = finalTitle;

    const description = document.createElement("p");
    description.className = "text-sm text-gray-900";
    const truncatedDescription = data.description.slice(0, 55);
    const finalDescription =
        data.description.length > 58
            ? truncatedDescription + "..."
            : truncatedDescription;
    description.textContent = finalDescription;

    const readMoreBtn = document.createElement("button");
    readMoreBtn.id = "readMore";
    readMoreBtn.className = "w-[200px] bg-red-100 py-1 text-red-400 rounded-md";
    readMoreBtn.textContent = "Read";

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
    const imageUrl =
        document.getElementById("imageUrl").value ||
        "https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg";
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

    console.log(blogData);

    if (blogArray) {
        blogArray = [...blogArray, blogData];
    } else {
        blogArray = [blogData];
    }

    localStorage.setItem("blogDataArray", JSON.stringify(blogArray));
    togglePopup();
    location.reload();
}

// Create And Show Blog Container For a Single Blog
function createBlogContainer(id) {
    const indexOfBlog = blogArray.findIndex((blog) => blog.id == id);
    const blogData = blogArray[indexOfBlog];

    const blogContainer = document.createElement("div");
    blogContainer.id = "blogContainer";
    blogContainer.className =
        "w-[95%] rounded-lg shadow-[0_1px_3px_2px_rgba(0,0,0,0.3)] flex justify-between items-center flex-col gap-10 mb-8 pb-8";

    const headerSection = document.createElement("div");
    headerSection.className =
        "flex justify-between items-center w-[95%] bg-[#6f11f5] rounded-lg mt-8 h-[35vh] text-white p-2";

    const titleSection = document.createElement("div");
    titleSection.className = "flex flex-col justify-center gap-8";

    const titleElement = document.createElement("h1");
    titleElement.className = "font-bold text-2xl";
    titleElement.textContent = blogData.title;

    const descriptionElement = document.createElement("h3");

    descriptionElement.className = "text-md max-w-lg";
    descriptionElement.textContent = blogData.description;

    titleSection.appendChild(titleElement);
    titleSection.appendChild(descriptionElement);

    const imageSection = document.createElement("div");

    const imageElement = document.createElement("img");

    imageElement.className =
        "rounded-lg w-[350px] h-[250px] object-cover border-2 border-white";
    imageElement.src = blogData.imageUrl;
    imageElement.alt = "Blog Image";

    imageSection.appendChild(imageElement);

    headerSection.appendChild(titleSection);
    headerSection.appendChild(imageSection);

    const contentSection = document.createElement("div");
    contentSection.className = "w-[93%]";

    const contentElement = document.createElement("pre");
    contentElement.className = "text-left whitespace-pre-wrap font-[poppins]";
    contentElement.textContent = blogData.readContent;

    contentSection.appendChild(contentElement);

    blogContainer.appendChild(headerSection);
    blogContainer.appendChild(contentSection);

    document.getElementById("blogs").style.display = "none";
    document.querySelector("main").appendChild(blogContainer);
    document.getElementById("addBlogBtn").style.display = "none";
    document.getElementById("closeBlogBtn").style.display = "block";
}

// Get Read Button Clicked Blog
document.querySelector("#blogs").addEventListener("click", function (e) {
    if (e.target.id === "readMore") {
        const id = e.target.parentElement.getAttribute("id");
        createBlogContainer(id);
    }
});

// Close Single Blog Container
function closeBlog() {
    document.getElementById("blogContainer").remove();
    document.getElementById("blogs").style.display = "flex";
    document.getElementById("addBlogBtn").style.display = "block";
    document.getElementById("closeBlogBtn").style.display = "none";
}
