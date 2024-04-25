import { useCallback } from "react";
import classes from "./App.module.css";
import { game } from "./game";

const App = () => {
  const captureBoxes = useCallback((node: HTMLDivElement | null) => {
    const boxes = Array.from((node?.children ?? []) as HTMLButtonElement[]);
    game.setUp({ boxes });
  }, []);

  return (
    <div className={classes.root}>
      <h1>Tic Tak Toe</h1>

      <div ref={captureBoxes} className={classes.board}>
        <button className={classes.box} />
        <button className={classes.box} />
        <button className={classes.box} />
        <button className={classes.box} />
        <button className={classes.box} />
        <button className={classes.box} />
        <button className={classes.box} />
        <button className={classes.box} />
        <button className={classes.box} />
        <button className={classes.box} />
      </div>

      <button onClick={() => game.reset()}>Reset</button>
    </div>
  );
};

export default App;
