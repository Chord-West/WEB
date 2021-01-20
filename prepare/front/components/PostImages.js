import React,{useCallback,useState} from 'react';
import {PlusOutlined} from '@ant-design/icons';
import PropTypes from 'prop-types';
import ImagesZoom from "./ImagesZoom";
import styled from 'styled-components';



const PostImages=({images})=>{
    const onZoom = useCallback(()=>{
        setShowImagesZoom(true);
    },[]);
    const onClose = useCallback(()=>{
        setShowImagesZoom(false);
    },[]);
    const [showImagesZoom, setShowImagesZoom]= useState(false);
    if (images.length===1){
        return(
            <>
                <img role="presentation" src={images[0].src} alt={images[0].src} onClick={onZoom}/>
                {showImagesZoom && <ImagesZoom images={images} onClose={onClose}/>}
            </>

        );
    }
    if (images.length===2){
        return(
            <>
                <img role="presentation" width="50%" src={images[0].src} alt={images[0].src} onClick={onZoom}/>
                <img role="presentation" width="50%" src={images[1].src} alt={images[1].src} onClick={onZoom}/>
                {showImagesZoom && <ImagesZoom images={images} onClose={onClose}/>}
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
            {showImagesZoom && <ImagesZoom images={images} onClose={onClose}/>}
        </>

    );
}

PostImages.propTypes={
    images : PropTypes.arrayOf(PropTypes.object),
}

export default PostImages;