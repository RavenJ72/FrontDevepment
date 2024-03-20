function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   function onClick() {
      let listOfTableElements = document.querySelectorAll('#table tbody tr')
      let searchInfo = document.getElementById("searchField").value
      for (let element of listOfTableElements) {

         if(element.textContent.includes(searchInfo)){
            element.classList.add("select");
         }else{
            element.classList.remove("select");
         }
      }
   }
}