class form{
    constructor(){
        this.title=createElement('h1');
        this.question=createElement('h3');
        this.o1=createElement('h3');
        this.o2=createElement('h3');
        this.input1=createInput('name');
        this.input2=createInput('answer');
        this.button=createButton('check');

    }
    display(){
        this.title.html("my quiz game");
        this.title.position(displayWidth/2-50,0);

        this.question.html("what is the capital of our contry");
        this.question.position(displayWidth/2-200,200);

        this.o1.html("1.delhi");
        this.o1.position(displayWidth/2-200,250);

        this.o2.html("2.kolkata");
        this.o2.position(displayWidth/2-200,300);

        this.input1.position(displayWidth/2-200,350);
        this.input2.position(displayWidth/2,350);

        this.button.position(displayWidth/2-100,400);

        this.button.mousePressed(()=>{
            this.input1.hide();
            this.input2.hide();
            this.button.hide();
            var p1=createElement('h3');
            p1.html("hello "+this.input1.value());
            p1.position(displayWidth/2-100,350);

            var p2=createElement('h3');
            if(this.input2.value()==="1"){
                p2.html("correct answer");
                p2.position(displayWidth/2-100,400);
            }
            else{
                p2.html("wrong answer");
                p2.position(displayWidth/2-100,400);

            }
        })
        
    }
}