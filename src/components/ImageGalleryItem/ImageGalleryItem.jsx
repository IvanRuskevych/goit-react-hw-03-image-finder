import css from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ images, toggleModal }) {
  // console.log(images);
  return images.map(({ id, webformatURL, tags }) => {
    return (
      <li className={css.ImageGalleryItem} key={id}>
        <img
          src={webformatURL}
          alt={tags}
          className={css.ImageGalleryItemImage}
          onClick={() => toggleModal(id)}
        />
      </li>
    );
  });
}
