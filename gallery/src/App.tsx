import { useState, useEffect, FormEvent } from 'react';
import * as C from './App.styles';
import * as Photos from './services/photos';
import { Photo } from './types/Photo';
import { PhotoItem } from './components/PhotoItem';
import { FaReact } from 'react-icons/fa';
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import PhotoModal from './components/PhotoModal';

export interface IModalInfo {
  isOpen: boolean;
  currentPhoto: {
    url: string,
    name: string
  };
}

const App = () => {

  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(()=>{
    getPhotos();
  }, []);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);
      const file = formData.get('image') as File;
      if(file && file.size > 0) {
        setUploading(true);
        let result = await Photos.insert(file);
        setUploading(false);

        if(result instanceof Error) {
          alert(`${result.name} - ${result.message}`);
        } else {
          let newPhotoList = [...photos];
          newPhotoList.push(result);
          setPhotos(newPhotoList);
        }
      }
  }

  const handleDeleteClick = async (name: string) => {
    await Photos.deletePhoto(name);
    getPhotos();
  }

  const getPhotos = async () => {
    setLoading(true);
    setPhotos(await Photos.getAll());
    setLoading(false);
  }

  const [currentModalInfo, setCurrentModalInfo] = useState<IModalInfo>({ isOpen: false, currentPhoto: { name: '', url: ''} });

  return (
    <C.Container>
      <PhotoModal
        currentModalInfo={currentModalInfo}
        setCurrentModalInfo={setCurrentModalInfo}
      />
      <C.Area>
         <C.Header>iPhoto Gallery</C.Header>

         <C.UploadForm  onSubmit={handleFormSubmit}>
          <input type="file" name="image" />
          <input type="submit" value="Enviar" />
          {uploading && "Enviando..."}
        </C.UploadForm>
          
          {loading &&
            <C.ScreenWarning>
              <div className="emoji">⏳</div>
              <div>Carregando...</div>
            </C.ScreenWarning>
          }

          {!loading && photos.length > 0 &&
            <C.PhotoList>
               {photos.map((item, index)=>(
                 <PhotoItem 
                  key={index} 
                  url={item.url} 
                  name={item.name}
                  onDelete={handleDeleteClick}
                  setCurrentModalInfo={setCurrentModalInfo}
                 />
               ))}
            </C.PhotoList>
          }

          {!loading && photos.length === 0 &&
          <C.ScreenWarning>
            <div className="emoji">😞</div>
            <div>Ainda não há fotos aqui!!!.</div>
          </C.ScreenWarning>
          }


      </C.Area>

      <C.Footer>
        <p> <AiOutlineCopyrightCircle /> CreateBy Will Freittas with React <FaReact/> in 2021  </p>
      </C.Footer>

    </C.Container>
  );
}

export default App;