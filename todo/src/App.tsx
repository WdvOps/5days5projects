import { useState } from 'react';
import * as Comp from './App.styles';
import { Item } from './types/Item';
import  ListItem  from './components/ListItem';
import { AddArea } from './components/AddArea';


function App() {
  
  const [list, setList] = useState<Item[]>([
    {
      id: 1, name: "Comprar wi-fi usb" , done: false
    },
    {
      id: 2, name: "Comprar adaptador bluetooth" , done: false
    }
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList)
  }

  return (
    <Comp.Container>

      <Comp.Area>
        <Comp.Header>
          Lista de Tarefas
        </Comp.Header>
        <AddArea onEnter={handleAddTask} />
        
        {list.map((item, index)=>(
          <ListItem 
            key={index} 
            item={item}
            onChange={handleTaskChange}
          />
        ))}
      </Comp.Area>

    </Comp.Container>
  );
}

export default App;