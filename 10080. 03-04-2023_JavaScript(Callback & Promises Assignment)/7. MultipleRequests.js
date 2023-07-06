async function multipleRequests(http1, http2) {
    const [myRequest1, myRequest2] = await Promise.all([
        fetch(http1).then((response) => response.json()),
        fetch(http2).then((response) => response.json()),
    ]);

    return {
        todo: myRequest1,
        post: myRequest2,
    };
}

const request1 = "https://jsonplaceholder.typicode.com/todos/1";
const request2 = "https://jsonplaceholder.typicode.com/posts/1";

multipleRequests(request1, request2).then((data) => {
    console.log(data);
});
