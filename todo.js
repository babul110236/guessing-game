let input=prompt('What would you like to do')
const todos=['collect chicken eggs','clean litter box'];
while (input!=='quit'&& input!=='q' ){
    if (input ==='list') {
        console.log('************');
        for (i=0;i<todos.length;i++){
            console.log(`${i}:${todos[i]}`)
        }
        console.log('************');
    }else if (input==='new'){
        const newTodo=prompt('Ok What is new to do');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!!`)
    }else if(input==='delete'){
      const index= parseInt(prompt('Ok enter the index to delete'));
      if(!Number.isNaN(index)){
        const deleted= todos.splice(index,1);
        console.log(`Ok deleted`)
      }else{
        console.log('unknown index')
      }
    }
    input=prompt('What would you like to do'); 
}
console.log("OK YOU QUIT APP!!")