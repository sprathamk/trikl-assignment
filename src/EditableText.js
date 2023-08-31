import React, { useState } from 'react'
import Draggable from 'react-draggable'

function EditableText() {
    const [editableText, setEditableText] = useState('Edit me...');

    const handleTextChange = (event) => {
        setEditableText(event.target.innerText);
    };

    return (
        <div>
            <Draggable>
                <div contentEditable={true} onInput={handleTextChange} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold uppercase -p-4 rounded">
                    Overlay Text
                </div>
            </Draggable>

        </div>
    )
}

export default EditableText
