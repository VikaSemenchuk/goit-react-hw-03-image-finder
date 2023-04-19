import { GalleryImg, GalleryItem } from "./GalleryItem.styled";

export const ImageGalleryItem = ({image}) => {
    const {webformatURL} = image
    return (
        <GalleryItem>
            <GalleryImg src={webformatURL} />
        </GalleryItem>
    )
}