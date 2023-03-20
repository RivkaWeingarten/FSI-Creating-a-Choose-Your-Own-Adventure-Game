//Your Code here
//window,prompt("Do you head left or right?")
//let answer  = window.prompt('Do you head left or right?')
//1. right or left
    //1a=right
        //past the dragon
            //stay
            //run
        //away
            //draw it
            //pick it

    //1b=left
        //follow
            //stay
            //spread the word
        //continue
            //ladder
            //staircase

//1. right or left
let firstAnswer=window.prompt("Do you head right or left")
//1a=right
if (firstAnswer==="right") {
//let secondAnswer = window.prompt("You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon altogether. Which do you take? past or away")
let secondAnswer=window.prompt("past or away")

   
        //past the dragon
        if (secondAnswer==="past"){
            let thirdAnswer=window.prompt("The dragon wakes up and sits upright. You only have a moment to respond, to stay or run")
        
            //stay
            if (thirdAnswer==="stay"){
                window.alert("You and the dragon have an uplifting conversation about local politics and become lifelong friends.")
            }
             //run
            else if(thirdAnswer==="run"){
                window.alert("Quickly, you run back to the cave's entrance. Sheepish, you return home.")
            }
        }
        //away
       else if (secondAnswer==="away"){
            let AwaythirdAnswer=window.prompt("After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do?")
                    
        
            //draw it
            if (AwaythirdAnswer==="draw it"){
                window.alert("You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch.")
            }
            //pick it
          else if (AwaythirdAnswer==="pick it") {
            window.alert("You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.")
          
         
        }
    }
}

    //1b=left
    else if (firstAnswer==="left"){
        
        let LsecondAnswer=window.prompt("You come across a stray cat. It scampers off down a small hole just large enough for you to crawl through. Do you follow it or continue on your path?")
    

        //follow
        if (LsecondAnswer==="follow"){
            let FollowthirdAnswer=window.prompt("You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.")
        
           //stay
            if (FollowthirdAnswer==="stay"){
                window.alert(" You live happily amongst the cats for the rest of your days.")
             }
           //spread the word
               else if(FollowthirdAnswer==="spread the word"){
                window.alert("You spread the word.")
                }
            }
        
            //continue
    
            else
             if(LsecondAnswer==="continue"){
            let ContinuethirdAnswer=window.prompt("You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take?")
             
    //ladder
         if(ContinuethirdAnswer==="ladder"){
            window.alert("After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home.")
         }
      
            //staircase
            else if(ContinuethirdAnswer==="staircase"){
                window.alert("After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.")
            }
        
        }
        
}