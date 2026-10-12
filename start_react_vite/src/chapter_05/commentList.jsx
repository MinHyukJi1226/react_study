import Comment from "./comment";

const comments = [
    {
        name: '이름',
        comment: '안녕하세요',
    },
    {
        name: '이름2',
        comment: '안녕하세요2',
    },
    {
        name: '이름3',
        comment: '안녕하세요3',
    },
]

function CommentList(props) {
    return (
        <div>
            {comments.map((commnet) => {
                return (
                    <Comment
                        name={commnet.name}
                        comment={commnet.comment}
                    />
                );
            })}
        </div>
    );
}

export default CommentList;