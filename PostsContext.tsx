import { PostActions, postReducer } from "@/reducers/postReducer";
import { Post } from "@/types/Post";
import { createContext, Dispatch, ReactNode, useReducer, useState } from "react"

type ContextType = {
    posts: Post[];
    dispatch: Dispatch<PostActions>;
}

export const PostContext = createContext<ContextType | null>(null);
export const PostProvider = ({ children }: { children: ReactNode }) => {
    const [posts,dispatch] = useReducer(postReducer, []);

    return(
        <PostContext.Provider value={{ posts, dispatch }}> {children} </PostContext.Provider>
    )
}