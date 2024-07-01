import React, {FC} from 'react';
import {IPost} from "../../models/IPost";

interface IProps {
    posts: IPost[]
}

const PostsComponent: FC<IProps> = ({ posts }) => {
    return (
        <div>
            {posts.length === 0 ? (
                <p>There are no user posts</p>
            ) : (
                <ul>
                    {posts.map((value) => (
                        <li key={value.id}>
                            <h3>{value.id}: {value.title}</h3>
                            {value.body}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PostsComponent