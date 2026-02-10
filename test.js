/**
 * JavaScript এ যখন কোনো কাজ সময় নেয়
   (API call, server থেকে data আনা, file load করা), 
    তখন সেটা asynchronous হয়।
 *
 */

const data = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  // .then((response) => response.json())
  // .then((json) => console.log(json));

  console.log("test");
  const data = await res.json();
  console.log(data);
  console.log(true);
};

data();
/**
 * output :
test
{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }
true
 */
