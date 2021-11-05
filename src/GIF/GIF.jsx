import React, { useRef } from "react";

export default function GIF(props) {

    const searchRef = useRef()
    function handleSubmit(e) {
        e.preventDefault();
        props.newGif(searchRef.current.value)
    }
    function handleRandomSubmit(e) {
        e.preventDefault();
        props.randomGif()
    }

    function handleFavSubmit(e) {
        e.preventDefault();
        props.saveGif(props.data.data.id)
    }

    function handleShowSubmit(e) {
        e.preventDefault();
        props.viewGif()
    }




    return (
        <div>
            <h1>GIPHY</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="search" placeholder="Search" ref={searchRef} />
                <button >New GIF</button>
            </form>
            <div class='buttons'>

            <form onSubmit={handleRandomSubmit}>
                <button >Random GIF</button>
            </form>
            <form onSubmit={handleFavSubmit}>
                <button >Save GIF</button>
            </form>
            {props.favGif ? <form onSubmit={handleShowSubmit}><button >View Saved GIF</button></form>: null}
            </div>


            {!!props.data.data ? <img src={props.data.data.images.downsized_large.url} alt></img> : null}


        </div>
    )
}