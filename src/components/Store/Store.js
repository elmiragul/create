import { observable, action, decorate } from 'mobx';



class Store {
    people=[];
    name = '';
    classification='';
    height='';
    birthDate='';


    handleClick() {

    
    }
    getPeople(){
        const url='https://swapi.co/api/people';
        fetch(url)
        .then(response => response.json())
               .then(data => {
                this.people = data.results
                console.log(data.results)
               })
              
     
               .catch(error => console.error(error))      
    }

    setName(value) {

        this.name = value;
    }
    setClassification(value) {

        this.classification = value;
    }
    setHeight(value) {

        this.height = value;
    }
    setBirthday(value) {

        this.birthDate = value;
    }

}

const store = decorate(Store, {
    people:observable,
    classification: observable,
    name: observable,
    height: observable,
    birthDate: observable,
    handleClick: action,
    setName: action,
    setClassification:action,
    getPeople:action,
    setHeight:action,
    setBirthday:action
})


export default new store();