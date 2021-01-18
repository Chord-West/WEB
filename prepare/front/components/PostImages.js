import React,{useCallback,useState} from 'react';
import {PlusOutlined} from '@ant-design/icons';
import PropTypes from 'prop-types';

const PostImages=({images})=>{
    const onZoom = useCallback(()=>{
        setShowImagesZoom(true);
    },[]);
    const [showImagesZoom, setShowImagesZoom]= useState(false);
    if (images.length===1){
        return(
            <>
                <img role="presentation" src={images[0].src} alt={images[0].src} onClick={onZoom}/>
            </>

        );
    }
    if (images.length===2){
        return(
            <>
                <img role="presentation" width="50%" src={images[0].src} alt={images[0].src} onClick={onZoom}/>
                <img role="presentation" width="50%" src={images[1].src} alt={images[1].src} onClick={onZoom}/>
            </>

        );
    }
    return(
        <>
            <div>
                <img role="presentation" width="50%" src={images[0].src} alt={images[0].src} onClick={onZoom}/>
                <div
                    role="presentaion"
                    style={{display:'inline-block',width:'50%',textAlign:'center',verticalAlign:'middle'}}
                    onClick={onZoom}
                >
                    <PlusOutlined/>
                    <br/>
                    {images.length-1} 개의 사진 더보기
                </div>
            </div>
        </>

    );
}

PostImages.propTypes={
    images : PropTypes.arrayOf(PropTypes.object),
}

export default PostImages;