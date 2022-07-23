import QuestionModule from "./QuestionModule";

const styles = {
    gridBox: `flex justify-center items-center h-44 w-full bg-secondary rounded-xl p-4`,
}

function GameGrid() {
    return (
        <div className="grid grid-cols-3 gap-4 h-full max-w-6xl mx-auto justify-items-center mt-10">
            <div className={styles.gridBox}>
                <QuestionModule type="3" />
            </div>
            <div className={styles.gridBox}>2</div>
            <div className={styles.gridBox}>3</div>
            <div className={styles.gridBox}>4</div>
            <div className={styles.gridBox}>Timer</div>
            <div className={styles.gridBox}>6</div>
            <div className={styles.gridBox}>7</div>
            <div className={styles.gridBox}>8</div>
            <div className={styles.gridBox}>9</div>
        </div>
    );
}

export default GameGrid;