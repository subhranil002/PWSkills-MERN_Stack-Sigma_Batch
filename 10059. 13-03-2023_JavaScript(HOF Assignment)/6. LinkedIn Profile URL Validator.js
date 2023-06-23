const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}$/;
const url = "https://www.linkedin.com/in/subhranilchakraborty";

if (regex.test(url)) {
    console.log("The input URL is a valid LinkedIn profile URL.");
} else {
    console.log("The input URL is not a valid LinkedIn profile URL.");
}
