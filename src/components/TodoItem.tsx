import classes from './TodoItem.module.css';

const TodoItem: React.FC<{ id: string, text: string, deleteTodoHandler: (id: string) => void }> = (props) => {
    const clickToDeleteHandler = () => {
        props.deleteTodoHandler(props.id);
    }
    return <li className={classes.item} onClick={clickToDeleteHandler}>{props.text}</li>;
};

export default TodoItem;