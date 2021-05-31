class Security {

    constructor(){

        this.access1 = createInput().attribute("placeholder", "Your Answer");
         
        this.button1 = createButton('Check');
        
        this.access2 = createInput().attribute("placeholder", "Your Answer");
         
        this.button2 = createButton('Check');
        
        this.access3 = createInput().attribute("placeholder", "Your Answer");
        
        this.button3 = createButton('Check');
       
        this.access4 = createInput().attribute("placeholder", "Your Answer");
        
        this.button4 = createButton('Check');
        
        this.access5 = createInput().attribute("placeholder", "Your Answer");
         
        this.button5 = createButton('Check');
       
        this.access6 = createInput().attribute("placeholder", "Your Answer");
        
        this.button6 = createButton('Check');
       
        
    }

    hide(){
        this.access1.hide()
        this.access2.hide()
        this.access3.hide()
        this.access4.hide()
        this.access5.hide()
        this.access6.hide()
        this.button1.hide()
        this.button2.hide()
        this.button3.hide()
        this.button4.hide()
        this.button5.hide()
        this.button6.hide()
    }
    show(){
        this.access1.show()
        this.access2.show()
        this.access3.show()
        this.access4.show()
        this.access5.show()
        this.access6.show()
        this.button1.show()
        this.button2.show()
        this.button3.show()
        this.button4.show()
        this.button5.show()
        this.button6.show()
    }


    display(){
        this.access1.position(100,120);
        this.access1.style('background', 'white'); 

        this.button1.position(100,150);
        this.button1.style('background', 'lightgrey');

        this.access2.position(540,170);
        this.access2.style('background', 'white');  

        this.button2.position(540,200);
        this.button2.style('background', 'lightgrey');

        this.access3.position(1000,130);
        this.access3.style('background', 'white');  

        this.button3.position(1000,160);
        this.button3.style('background', 'lightgrey');

        this.access4.position(200,420);
        this.access4.style('background', 'white');  

        this.button4.position(200,450);
        this.button4.style('background', 'lightgrey');    

        this.access5.position(600,530);
        this.access5.style('background', 'white');  

        this.button5.position(600,560);
        this.button5.style('background', 'lightgrey');

        this.access6.position(1000,420);
        this.access6.style('background', 'white');  

        this.button6.position(1000,450);
        this.button6.style('background', 'lightgrey');

        this.button1.mousePressed(() => {
            
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.remove();
                this.access1.remove();
                score++;
            }
        });

    
        this.button2.mousePressed(() => {
          
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.remove();
                this.access2.remove();
                score++;
            }
        });

      
        this.button3.mousePressed(() => {
            
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.remove();
                this.access3.remove();
                score++;
            }
        });
        this.button4.mousePressed(() => {
         
            if(system.authenticate(accessCode4,this.access4.value())){
                this.button4.remove();
                this.access4.remove();
                score++;
            }
        });

    
        this.button5.mousePressed(() => {
            
            if(system.authenticate(accessCode5,this.access5.value())){
                this.button5.remove();
                this.access5.remove();
                score++;
            }
        });

      
        this.button6.mousePressed(() => {
           
            if(system.authenticate(accessCode6,this.access6.value())){
                this.button6.remove();
                this.access6.remove();
                score++;
            }
        });

    }
  
}
