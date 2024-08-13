async function fetchData() {
    const myHeaders = new Headers();
    myHeaders.append("Cookie", "connect.sid=s%3AgjxZffKfe4zxSPmnSNqghEch_5Hv5xxi.PzKYcaZDvQ38Le03wmR5aLlS2Qi%2F%2FXeQ7UTBpcjRDIw");

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    const res = await fetch("https://cat-fact.herokuapp.com/facts/", requestOptions)
    record = await res.json()

    console.log('record', record)
}

fetchData();