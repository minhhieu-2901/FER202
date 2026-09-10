function ES6() {
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    introduce() {
      return `EX1: Name: ${this.name}, Age: ${this.age}`;
    }
  }

  class Students extends Person {
    constructor(name, age, scores = []) {
      super(name, age);
      this.scores = scores;
    }

    avgScore() {
      const total = this.scores.reduce((sum, scores) => sum + scores, 0);
      return total / this.scores.length;
    }

    inforStudent() {
      return `Ex2: Name: ${this.name}, Age: ${this.age}, Average Score: ${this.avgScore()}`;
    }
  }

  const person = new Students("Hieu", 21, [8, 9, 10]);

  function createScores(...scores) {
    return scores;
  }

  const scores = createScores(8, 9, 10);

  const { name, age } = person;

  const newScore = [4, 7, 8];
  person.scores = [...person.scores, ...newScore];

  const pass = person.scores.filter((scores) => scores >= 5);
  const total = person.scores.reduce((sum, score) => sum + score, 0);

  return (
    <div style={{ marginLeft: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Bài tập ES6</h1>
      <h2>Ex1</h2>
      <p>{person.introduce()}</p>

      <h2>Ex2</h2>
      <p>{person.inforStudent()}</p>

      <h2>Ex3</h2>
      <p>Score: {scores.join(", ")}</p>

      <h2>Ex4</h2>
      <p>
        Name: {name}, Age: {age}
      </p>

      <h2>Ex5</h2>
      <p>New score after add: {person.scores.join(", ")}</p>

      <h2>Ex6</h2>
      <p>Pass scores: {pass.join(", ")}</p>
      <p>Total: {total}</p>
    </div>
  );
}

export default ES6;
