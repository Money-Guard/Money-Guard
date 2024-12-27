import style from "./index.module.css";

const Loading = () => {

  return (
  <div className={style.loader}>
  <div className={style.dot}></div> 
  <div className={style.dot}></div>    
  <div className={style.dot}></div>    
  </div>
  );
};

export default Loading;
