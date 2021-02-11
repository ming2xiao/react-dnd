import { DragPreviewImage, useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import { boxImage } from './boxImage';
const style = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    marginBottom: '.5rem',
    backgroundColor: 'white',
    cursor: 'move',
    width: '20rem',
};
export const BoxWithImage = () => {
    const [{ opacity }, drag, preview] = useDrag({
        item: { type: ItemTypes.BOX },
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.4 : 1,
        }),
    });
    return (<>
			<DragPreviewImage connect={preview} src={boxImage}/>
			<div ref={drag} style={{ ...style, opacity }}>
				Drag me to see an image
			</div>
		</>);
};
