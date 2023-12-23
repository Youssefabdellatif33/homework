function randInt(n){     
    return Math.floor(Math.random()*(n+1))
    }
    var highscore = 10
    var triesmax = 1
    var tries = 1
    var x = randInt(10)
    function guessMyNumber(player,n){
    if (n>10){
        tries = tries+1
    return 'you/re out of range '+player
    } 
    else if ((n === x)&&(tries===1)){
        highscore = tries
            x = randInt(n)
             x = randInt(n + 3)
             return 'wow you got it in the first try '+player}  
    else if ((n === x)&&(tries<=highscore)){
        highscore = tries
            x = randInt(n)
             x = randInt(n + 3)
             return 'nice '+player+ ' you broke a record of '+ highscore+'tries'}  
             else if (n === x){
        triesmax = tries
        tries = 0
         x = randInt(n + 3)
        return 'congrats u did it in' + triesmax+ ' tries '+player+'game is now harder'}
     
        else if (tries>=3){

         tries = 0
         x = randInt(n)
         x = randInt(n - 3)
         return 'you/re out of tries '+player+' game is now a bit easier, good luck in the next round'
         
    }
    else if (n>x){
         tries = tries+1
    return 'sorry '+player+'ur answer is wrong try a lower guess'
    }else if (n<x){
    tries = tries+1
    return 'sorry '+player+'ur answer is wrong try a higher guess'}
    }