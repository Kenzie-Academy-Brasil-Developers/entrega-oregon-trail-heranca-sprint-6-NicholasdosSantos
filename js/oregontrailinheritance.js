class Traveler {
    
    constructor (name){
        this._name = name; 
        this._amountOfFood = 1; 
        this._isHelthy = true; 
    }
    
    get name(){
        return this._name;
    }

    get amountOfFood(){
        return this._amountOfFood;
    }

    get isHelthy(){
        return this._isHelthy;
    }

    set name(name){
        this._name = name;
    }

    set amountOfFood(amountOfFood){
        this._amountOfFood = amountOfFood;
    }

    set isHelthy(isHelthy){
        this._isHelthy = isHelthy;
    }

    hunt(){
       return this._amountOfFood += 2
    }

    eat(){
        if (this._amountOfFood > 0){
           return this._amountOfFood -= 1
        }else{
           return this._isHelthy = false
        }
    }
}    

class Hunter extends Traveler {
    constructor(name, isHelthy){
        super(name,isHelthy)
        this._amountOfFood = 2;
    }

    hunt(){
       return this._amountOfFood += 5;
    }

    eat(){
        if (this._amountOfFood >= 2){
           return this._amountOfFood -= 2
        }else{
           this._amountOfFood -= 1 
           this._isHelthy = false
        }
    }

    giveFood(traveler, numOfFoodUnits){
        if(numOfFoodUnits <= this._amountOfFood){
           this._amountOfFood -= numOfFoodUnits;
            traveler.amountOfFood += numOfFoodUnits
        }
    }

}

class Doctor extends Traveler {
    constructor(name,amountOfFood, isHealthy){
        super(name,amountOfFood,isHealthy)
    }

    heal(traveler){
        return traveler._isHelthy = true;
    }
}

class Wagon {
    constructor(capacity){
        this.capacity = capacity; //um inteiro
        this.passengers = []; // um array
    }

    getAvailableSeatCount(){
  
        return this.capacity - this.passengers.length
    }
    join(name){
        
        if(this.capacity > this.passengers.length){
            this.passengers.push(name)
        }

    }

    shouldQuarantine(){

       for(let i = 0; i < this.passengers.length; i++){  
            if(this.passengers[i].isHelthy === false){
                return true
            }
       }

       return false
    }

    totalFood(){
        let result = []
        this.passengers.forEach(passenger => result.push(passenger.amountOfFood))

        return result.reduce((a,b) => a + b)
    }
}

