import React from 'react';
import { useGetCommentsQuery, useCreateCommentMutation } from "../Services/API";
import styles from '../Style/Comments.module.css';

export default function CommentsList({ productId }) {
    // Récupération des commentaires
    let { data: comments, isFetching } = useGetCommentsQuery(productId);
    let [createComment, { isLoading }] = useCreateCommentMutation();

    const handleSubmit = (e) => {
        e.preventDefault();
        let username = e.target.username.value;
        let comment = e.target.comment.value;

        createComment({ productId, username, comment })
            .unwrap()
            .then(() => console.log("Comment created successfully"))
            .catch(error => console.error("Error in creating comment:", error));
        e.target.reset();
    };

    // Inversion de l'ordre des commentaires (du plus récent au plus ancien)
    if (comments) {
        comments = comments.slice().reverse();
    }

    if (isFetching) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className={styles.commentsContainer}>
            <h2>Add A Comment</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input 
                    type="text" 
                    name="username" 
                    placeholder="Username" 
                    required 
                    className={styles.inputField}
                />
                <textarea 
                    name="comment" 
                    placeholder="Comment" 
                    required 
                    className={styles.textareaField}
                />
                <button 
                    type="submit" 
                    disabled={isLoading}
                    className={styles.submitButton}
                >
                    Submit
                </button>
            </form>

            <h2>Comments</h2>
            {comments && comments.length > 0 ? (
                comments.map((comment) => (
                    <div key={comment.id} className={styles.comment}>
                        <h3>{comment.username}</h3>
                        <p>{comment.comment}</p>
                    </div>
                ))
            ) : (
                <div className={styles.noComments}>No comments available.</div>
            )}
        </div>
    );
}
