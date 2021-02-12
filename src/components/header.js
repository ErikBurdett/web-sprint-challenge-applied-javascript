import axios from 'axios'
console.log(axios)

// why can't i declare this??? I'm stuck
const wholeHeaderDiv = document.querySelector('.header-container');


// ?????????????????????? 
const Header = (title, date, temp) => {
  // creating header elements
  const wholeHeaderDiv = document.createElement('div')
  const headerTitle = document.createElement('h1')
  const headerDate = document.createElement('span')
  const headerTemp = document.createElement('span')
  // settings class names, attributes, and text
  wholeHeaderDiv.classList.add('header')
  headerDate.classList.add('date')
  headerTemp.classList.add('temp')
  headerTitle.textContent = "title"
  // appending to wholeHeader div
  wholeHeaderDiv.appendChild(headerDate)
  wholeHeaderDiv.appendChild(headerTemp)
  wholeHeaderDiv.appendChild(headerTemp)
  wholeHeaderDiv.appendChild(headerTitle)
  

  return Header;
}


  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //


const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
