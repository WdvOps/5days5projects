import { IModalInfo } from '../../App';
import * as C from './styles';

type Props = {
    url: string;
    name: string;
    onDelete: (name: string) => void;
    setCurrentModalInfo: (info: IModalInfo) => void;
}

export const PhotoItem = ({ url, name, onDelete, setCurrentModalInfo }: Props) => {
    function handleOpenModal() {
        setCurrentModalInfo({ isOpen: true, currentPhoto: { url, name }});
    }

    return(
        <C.Container onClick={handleOpenModal}>
            <img src={url} alt={name} />
            {name}
            <button onClick={()=>onDelete(name)}>Excluir</button>
        </C.Container>
    );
}