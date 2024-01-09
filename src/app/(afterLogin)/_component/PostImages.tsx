import Link from "next/link";
import React, { ReactNode } from "react";
import style from "./post.module.css";

type Props = {
  post: {
    postId: number;
    content: string;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    createdAt: Date;
    Images: any[];
  };
};

export default function PostImages({ post }: Props) {
  return (
    post.Images &&
    post.Images.length > 0 && (
      <Link
        href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
        className={style.postImageSection}
      >
        <img src={post.Images[0]?.link} alt="" />
      </Link>
    )
  );
}
