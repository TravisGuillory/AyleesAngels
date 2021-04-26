import React from "react";
import {PostPreview, POstPreview} from "../PostPreview/PostPreview";

export const PostPreviewList = () => {

    const postPreviewItems = props.posts.map((post) =>
        <PostPreview key = {post.id} post={post} />
    );

    return(

        <>
            {postPreviewItems}
        </>
    );

};