let letsPlay=false;

document.getElementsByClassName('play')[0].addEventListener('click',function(e){
    letsPlay=true;
})

document.getElementsByClassName('reset')[0].addEventListener('click',function(){
    location.reload()
    // clear all the things by your own
})

let obj={
    Rock:0,
    Paper:1,
    Sci:2,
}

let moves=document.getElementsByClassName('moves');

for(let i=0;i<moves.length;i++){
    moves[i].addEventListener('click',function(event){
        
        if(!letsPlay){
            window.alert('please click on play button')
            return;
        }
        let userMove=obj[event.target.textContent.toLowerCase()];
        let computerMove=parseInt(Math.random()*3);

        // 0 means rock
        // 1 means paper
        // 2 means scissors 

        //if user choosed rock
        if(userMove==0){
            if(computerMove==0){
                return;
            }
            if(computerMove==1){
                //do something 
                return "computer won this round";
            }else{
                //
                //do something 
                return"user won this round";
            }
        }
        //if user choosed the paper
        if(userMove==1){
            if(computerMove==1){
                return;
            }
            if(computerMove==0){
                //
                //do something
                return "user won this round";
            }else{
                //
                //do something
                return"computer won this round";
            }
        }
        //if user choosed the scissor
        if(userMove==2){
            if(computerMove==2){
                return;
            }
            if(computerMove==0){
                //
                //do something
                return "computer won this round";
            }else{
                //
                //do something
                return "user won this round"
            }
        }

    })
}