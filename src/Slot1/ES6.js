function ES6() {
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    introduce() {
      console.log(`EX1: Name: ${this.name}, Age: ${this.age}`);
    }
  }

  class Students extends Person {
    constructor(name, age, scores = []) {
      super(name, age);
      this.scores = scores;
    }

    avgScore() {
      const total = this.scores.reduce((sum, scores) => (sum += scores), 0);
      return total / this.scores.length;
    }

    inforStudent() {
      console.log(
        `Ex2: Name: ${this.name}, Age: ${this.age}, Average Score: ${this.avgScore()} `,
      );
    }
  }

  const person = new Students("Hieu", 21, [8, 9, 10]);
  person.introduce();
  person.inforStudent();

  function createScores(...scores) {
    return scores;
  }

  const scores = createScores(8, 9, 10);
  console.log(`Ex3:Score ${scores}`);

  const { name, age } = person;
  console.log(`Ex4: Name: ${name}, Age:${age}`);

  const newScore = [4, 7, 8];
  person.scores = [...person.scores, ...newScore];
  console.log(`Ex5: New score after add: ${person.scores}`);

  console.log("Ex6:");
  const pass = person.scores.filter((scores) => scores >= 5);
  console.log(`Pass scores: ${pass}`);
  const total = person.scores.reduce((sum, score) => (sum += score), 0);
  console.log(`Total: ${total}`);

  const evaluate = (person) => {
    return new Promise((resolve, reject) => {
      if (person.avgScore >= 7) resolve("Excellent");
      else reject("Need to improve");
    });
  };

  evaluate(person.avgScore())
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
}

export default ES6;
