import React, { useEffect, useRef, useState } from 'react';

export default function ImagePractice() {
    const refButton = useRef()
    const [images, setImage] = useState(null)
    const [preview, setPreview] = useState(null)

    useEffect(() => {
        if (images) {
            const reader = new FileReader()

            reader.onloadend = () => {
                setPreview(reader.result)
            }
            reader.readAsDataURL(images)
        } else {
            setPreview(null)
        }
    }, [images])

    return (
        <div>
            {/* <p>{preview}</p> */}
            <form>
                <div className="display-image">
                    <div className="display-block">
                        {preview ?
                            <img src={preview} alt="Notfound" /> :
                            <i className='fa fa-user fa-4x'></i>}
                    </div>
                </div>

                <button className='image-button'
                    onClick={(event) => {
                        event.preventDefault();
                        refButton.current.click();
                    }}>
                    Add Image
                </button>

                <input type="file"
                    name="image"
                    id="image"
                    style={{ display: 'none' }}
                    accept="image/*"
                    ref={refButton}
                    onChange={(event) => {
                        const images = event.target.files[0];
                        images ? setImage(images) : setImage(null)
                    }}
                />
            </form>
        </div>
    )
}
