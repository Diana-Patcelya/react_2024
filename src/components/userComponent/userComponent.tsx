import React, { FC } from 'react';
import {IUser} from "../../models/IUser";

interface IProps {
    user: IUser
    getPosts:(id:number)=>void
}

const UserComponent: FC<IProps> = ({ user, getPosts }) => {
    return (
        <div>
            {user.id} : {user.firstName} {user.lastName} - <button onClick ={() =>{
            getPosts(user.id);
        }}>Get all posts by user id
        </button>
        </div>
    );
};

export default UserComponent;