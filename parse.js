const pizza = require('./pizza.json')
const Ingredients = require('./models/ingredient')
const Pizza = require('./models/pizza')

for(item of pizza){
    // if(item['title']===undefined){
    //     title="NULL"
    // }else{
    //     title=item['title']
    // }
    // if(item['description']===undefined){
    //     description="NULL"
    // }else{
    //     description=item['description']
    // }
    // if (item['image']===undefined) {
    //     image="NULL"
    // }else{
    //     image=item['image']
    // }
    // Pizza.create({title: title, description: description, image: image})
    // for(n of item['ingredient']){
    //     Ingredients.create({title:n['title']})
    // }
}

