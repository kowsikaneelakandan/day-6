// 3.Write a “person” class to hold all the details.
class person{
    constructor(firstname, lastname, age, gender, state, country){
        this.firstname= firstname
        this.lastname= lastname
        this.age= age
        this.gender= gender
        this.state= state
        this.country= country
    }
    getFullName(){
        const fullName= this.firstname+ ' '+this.lastname
        return fullName
    }

}
const person1 = new person("kowsika", "neelakandan", 29,"Female" ,"Tamilnadu", "India")
console.log(person1.getFullName())


//4.write a class to calculate the Uber price.
const Uber ={
    setkiloMeter(Km){
      this.price= Km * 20
    },
    getkilometer(Km){
        return this.price
    }
}
const UberkiloMeter = 5;

console.log(UberkiloMeter)


//1. Movie Rating
 class Movie{
    constructor(Title,studio,rating="PG"){
        this.Title= Title
        this.studio= studio
        this.rating= rating
    }
    get getPG(){
        let Titles=""
        if(this.Title == "PG"){
           Titles+=this.Title
        }
        return Titles
    }
   
 }
 let rating1= new Movie("crew","Balaji Motion Pictures")
 let rating2 = new Movie("Kalva","Axess Film Factory")
 let rating3= new Movie ("Casino Royale","Econ Production","PG-13")
 console.log(rating1)
 console.log(rating2)
 console.log(rating3)
