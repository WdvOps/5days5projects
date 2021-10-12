import { MouseEvent, useRef } from 'react';
import { IModalInfo } from '../../App';
import { Overlay } from './styles';

interface PhotoModalProps {
  currentModalInfo: IModalInfo;
  setCurrentModalInfo: (info: IModalInfo) => void;
}

function PhotoModal({ currentModalInfo, setCurrentModalInfo }: PhotoModalProps) {
  const { name, url } = currentModalInfo.currentPhoto;

  const modalRef = useRef(null);

  function handleClose(event: MouseEvent) {
    if(event.target === modalRef.current) {
      setCurrentModalInfo({ isOpen: false, currentPhoto: { url: "", name: "" }})
    }
  }

  return (
    <Overlay
      isOpen={currentModalInfo.isOpen}
      onClick={handleClose}
      ref={modalRef}
    >
      <div>
        <img alt={name} src={url}/>
      </div>
    </Overlay>
  );
};

export default PhotoModal;
