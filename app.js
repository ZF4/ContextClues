// document.body.addEventListener("DOMContentLoaded", function() {  
    var friends = ["Halie","Cody","Justin","John","Nola"]
    var locations = ["Bathroom","Hallway","Living room","Gulag","Closet","Pantry","Mudroom","Starbucks","Als Deli","Yo mommas house"]
    var weapons = ["knife","gun","fork","controller","tshirt","waffle maker","yukelele","spoon","car","harddrive","coffee cup","dice","blanket","c4","pencil","pillow","dog","flower","baloon","mop"]
    var i = 0
 //   function accusationFunc() { 
        for (var i = 1; i < 101; i++) {
            let h3 = $(`<h3 id="h3">Accusation ${i}</h3>`)
            $("#container").append(h3)
            h3.click(someFunc(i))

            
        //    someFunc(i);
        }
   // }
  //  accusationFunc();
    function someFunc(i) {

     
        return function() {
            
            alert("I accuse " +friends[i%friends.length] +" with the " + weapons[i%weapons.length]+" in the "+ locations[i%locations.length]);
          }

      }

    
    
    
    
    
    
// })