import React from 'react';
import styles from './search_bar.module.css';

const Search_bar = (props) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                <span className={styles.logo}>YOUTUBE</span>
                <form action="" className={styles.form}>
                    <input className={styles.input_box} type="text" placeholder='검색어를 입력하세요' value={props.text} onChange={props.onChange}/>
                    <button className={styles.btn} type='submit' onClick={props.search}>검색</button>
                </form>
            </div>
        </div>
    );
};

export default Search_bar;