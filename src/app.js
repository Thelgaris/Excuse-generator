window.onload = function() {
  //write your code here
  document.getElementById("escuse").innerHTML = "Hola";

  document.querySelector("#escuse").innerHTML = escuse();
  console.log("Hello Rigo from the console!");
};

const escuse = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoShow = Math.floor(Math.random() * who.length);
  let actionShow = Math.floor(Math.random() * action.length);
  let whatShow = Math.floor(Math.random() * what.length);
  let whenShow = Math.floor(Math.random() * when.length);

  return (
    who[whoShow] +
    " " +
    action[actionShow] +
    " " +
    what[whatShow] +
    " " +
    when[whenShow]
  );
};
