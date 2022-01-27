//NOTES_______
//make a toto app
//accept the value of the input and store it inside the ul
// only when submit todo is clicked store the input value
// when delete is clicked, remove the last ul on the list.
//NOTES END_______
//
//
//VARIABLES
const inputBox = document.getElementById("theInputBox");
const submitButton = document.getElementById("theSubmitButton");
const deleteButton = document.getElementById("theDeleteButton");
const theList = document.getElementById("theUlList");
const theForm = document.getElementById("theForm");
let newLi = document.createElement("li");
let storedData = [];
//FUNCTIONS
//ADD TODO FUNCTION
const addTodoItem = (todoItem,idNumber) => {
  newLi = document.createElement("li");

  newLi.textContent = todoItem;
  newLi.id=idNumber
  theList.appendChild(newLi);
  inputBox.value = "";
  console.log(newLi);

  
  // setTimeout(() => {
  //   newLi.classList.add("hidden");
  //   // console.log(newLi)
  // }, 100);
  
};
const updateData = (event) => { 
  let item = storedTodos.indexOf(event.target.id) --> 0
  // storedTodos[1] = "paint the house" <li id="0"></li> 
}


//USEDATA TO POPULATE LIST ON PAGE

const buildListOnPAge = ()=>{
emptyOutList()
storedData.forEach((todoItem, i) => {
  addTodoItem(todoItem, i) // adds to webpage
})

}
//STORE ARRAY DATA 

const pushInData = () => {


  storedData.push(inputBox.value);
  console.log(storedData)

}

//EMPTY OUT DATA 

const emptyOutList =() =>{
theList.innerHTML = "";
}



//REMOVE TODO FUNCTION
const removeTodoItem = () => {
  const _theList = document.getElementById("theUlList");
  if (_theList.length == 0) {
    return
  }// <=Not sure what this does, if removed everything seems to keep working just fine. 
  const _newLi = _theList.lastChild
  _newLi.classList.remove("hidden");
  console.log(_newLi);



  // setTimeout(() => {
  //   _theList.removeChild(_theList.lastChild);
  //   _newLi.classList.remove("hidden");
  //   console.log(_theList);
  // }, 1000);
};

//LISTENERS

submitButton.addEventListener("click", function(){

  pushInData()//builds array based on input
buildListOnPAge()//poulates the ul on page based on data array


});
deleteButton.addEventListener("click", removeTodoItem);
inputBox.addEventListener("keyup", function (e) {
  if (event.keyCode === 13) {
    addTodoItem();
  }
});








//FIXED 

//VARIABLES
// const inputBox = document.getElementById("theInputBox");
// const submitButton = document.getElementById("theSubmitButton");
// const deleteButton = document.getElementById("theDeleteButton");
// const theList = document.getElementById("theUlList");
// const theForm = document.getElementById("theForm");
// let newLi = document.createElement("li");
// //FUNCTIONS
// //ADD TODO FUNCTION
// const addTodoItem = () => {
//   newLi = document.createElement("li");
//   newLi.innerHTML = inputBox.value;
//   theList.appendChild(newLi);
//   inputBox.value = "";
//   setTimeout(() => {
//     newLi.classList.add("hidden");
//     // console.log(newLi)
//   }, 100);
// };
// //REMOVE TODO FUNCTION
// const removeTodoItem = () => {
//   const _theList = document.getElementById("theUlList");
//   if (_theList.length == 0) {
//     return
//   }
//   const _newLi = _theList.lastChild
//   _newLi.classList.remove("hidden");
//   console.log(_newLi);
//   setTimeout(() => {
//     _theList.removeChild(_theList.lastChild);
//     _newLi.classList.remove("hidden");
//     console.log(_theList);
//   }, 1000);
// };
// //LISTENERS
// submitButton.addEventListener("click", addTodoItem);
// deleteButton.addEventListener("click", removeTodoItem);
// inputBox.addEventListener("keyup", function (e) {
//   if (event.keyCode === 13) {
//     todoList();
//   }
// });


