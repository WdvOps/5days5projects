import * as Comp from './styles';
import   { Item }  from '../../types/Item';
import { useState } from 'react';


type Props = {
  item: Item
  onChange: (id: number, done: boolean) => void
}

const ListItem = ({ item, onChange }: Props) => {
   const [isChecked, setIsChecked] = useState(item.done);

  return (
    <Comp.Container done={isChecked}>
      <input
         type="checkbox" 
         checked={isChecked}
         onChange={e => setIsChecked(e.target.checked)}
      />
      <label>{item.name}</label>
    </Comp.Container>
  );
};

export default ListItem;
