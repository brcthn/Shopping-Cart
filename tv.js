 class Tv{
     constructor(brand){
       this.brand=brand;
       this.channel= 1;
       this.volume= 50;
     }

     increase(amount){
         if(amount<50){
         this.volume += amount;
         }
        else{
          this.volume = 50;  
        }
     }
     decrease(amount){
         if(amount<50){
         this.volume -= amount;
         }
         else{
            this.volume = 50;  
         }
     }
     reset(){
       this.volume=50;
      
     }

     status(){
         return this.brand +" at channel "+this.channel+",volume "+ this.volume;
     }
 }
 

 var tv1= new Tv("Panosonic");
  tv1.decrease(30)
  tv1.reset();
  
  console.log(tv1.status())