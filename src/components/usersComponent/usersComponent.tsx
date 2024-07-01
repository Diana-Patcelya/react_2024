import React, { useEffect, useState } from "react";

import { IUser } from "../../models/IUser";
import { IPost } from "../../models/IPost";

import { getAllUsers, getPostsOfUserById } from "../../services/api.service";

import PostsComponent from "../postsСomponent/postsСomponent";
import UserComponent from "../userComponent/userComponent";


const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getAllUsers().then((data: IUser[]) => {
            setUsers([...data]);
        });
    }, []);

    const getPosts = (id: number) => {
        getPostsOfUserById(id).then((data) => {
            setPosts([...data.posts]);
        });
    };

    return (
        <div>
            <ul>
                {users.map((user) => (
                    <UserComponent
                        key={user.id}
                        user={user}
                        getPosts={getPosts}
                    />
                ))}
            </ul>

            <div>
                <PostsComponent posts={posts} />
            </div>
        </div>
    );
};

export default UsersComponent;