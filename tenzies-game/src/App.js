function App() {
  return (
    <div className="app__container">
      <header>
        <h1>Tenzies</h1>
        <h2>
          Roll until all dice are the same. Press each die to freeze it at its
          current value between rolls.
        </h2>
      </header>
      <div className="dice">
        <div>1</div>
        <div>2</div>
        <div>5</div>
        <div>2</div>
        <div>1</div>
        <div>3</div>
        <div>6</div>
        <div>4</div>
        <div>4</div>
        <div>1</div>
      </div>
      <button>Roll</button>
    </div>
  );
}

export default App;
