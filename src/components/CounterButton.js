 import style from './styles.module.css';
 export default function CounterButton(props){
return<button className={style.CounterButton}onClick={props.onClickHandler}>
{props.children} </button>;
}