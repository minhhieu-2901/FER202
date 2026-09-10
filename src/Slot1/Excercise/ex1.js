import React, { useEffect, useState } from "react";
{/*Đây là bài 4 */}
class Shape {
  constructor(color) {
    this.color = color;
  }
}

class Rectangle extends Shape {
  constructor(color, length, width) {
    super(color);
    this.length = length;
    this.width = width;
  }
}

class Triangle extends Shape {
  constructor(color, base, height) {
    super(color);
    this.base = base;
    this.height = height;
  }
}

const getRandomNumber = () =>
  new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 10) + 1;

    if (number > 5) {
      resolve(number);
    } else {
      reject(new Error("Error"));
    }
  });

const Ex1 = () => {
  const [promiseResult, setPromiseResult] = useState("Loading...");

  useEffect(() => {
    getRandomNumber()
      .then((number) => setPromiseResult(`Random number: ${number}`))
      .catch((error) => setPromiseResult(error.message));
  }, []);

  var people = [
    { name: "Jack", age: 50 },
    { name: "Michael", age: 9 },
    { name: "John", age: 40 },
    { name: "Ann", age: 19 },
    { name: "Elisabeth", age: 16 },
  ];

  const isTeenager = (person) => person.age >= 10 && person.age <= 20;
  const firstTeenager = people.find(isTeenager);
  const teenagers = people.filter(isTeenager);
  const areAllTeenagers = people.every(isTeenager);
  const hasTeenager = people.some(isTeenager);

  var array = [1, 2, 3, 4];
  const sum = array.reduce((total, number) => total + number, 0);
  const product = array.reduce((result, number) => result * number, 1);

  const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
  ];

  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  const person = {
    name: "Costas",
    address: {
      street: "Lalaland 12",
    },
  };

  companies.forEach((company) => console.log(company.name));

  const companiesStartedAfter1987 = companies.filter(
    (company) => company.start > 1987,
  );
  companiesStartedAfter1987.forEach((company) => console.log(company.name));

  const retail = companies
    .filter((company) => company.category === "Retail")
    .map((company) => ({ ...company, start: company.start + 1 }));

  const addArgumentsToArray = (...argumentsList) =>
    argumentsList.reduce(
      (result, argument) =>
        Array.isArray(argument)
          ? [...result, ...argument]
          : [...result, argument],
      [],
    );
  const argumentsArray = addArgumentsToArray(1, "two", [3, 4], true);

  const { street } = person.address;

  const createCounter = () => {
    let count = 0;
    return () => count++;
  };
  const counter = createCounter();
  const counterResults = [counter(), counter(), counter()];

  const getQueryParameters = (url) =>
    Object.fromEntries(new URL(url).searchParams.entries());
  const queryParameters = getQueryParameters(
    "https://example.com?name=John&age=25",
  );

  return (
    <div style={{ marginLeft: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Bài tập JSX</h1>
      <h2>Ex1</h2>
      <p>
        First teenager: {firstTeenager.name} {firstTeenager.age}
      </p>
      <p>All teenagers: {teenagers.map((person) => person.name).join(", ")}</p>
      <p>Every person is a teenager: {areAllTeenagers.toString()}</p>
      <p>There is a teenager: {hasTeenager.toString()}</p>

      <h2>Ex2</h2>
      <p>Sum: {sum}</p>
      <p>Product: {product}</p>

      <h2>Companies</h2>
      <h3>All company names</h3>
      {companies.map((company) => (
        <p key={company.name}>{company.name}</p>
      ))}

      <h3>Companies started after 1987</h3>
      {companiesStartedAfter1987.map((company) => (
        <p key={company.name}>{company.name}</p>
      ))}

      <h3>Retail companies</h3>
      {retail.map((company) => (
        <div key={company.name}>
          <p>
            <strong>Name: {company.name}</strong>
          </p>
          <p>Category: {company.category}</p>
          <p>Start: {company.start}</p>
          <p>End: {company.end}</p>
        </div>
      ))}

      <h3>Companies sorted by end date</h3>
      {[...companies]
        .sort((companyA, companyB) => companyA.end - companyB.end)
        .map((company) => (
          <div key={company.name}>
            <p>
              Name: {company.name} {company.end}
            </p>
          </div>
        ))}

      <h3>Ages sorted in descending order</h3>
      {[...ages]
        .sort((ageA, ageB) => ageB - ageA)
        .map((age) => (
          <p key={age}>{age}</p>
        ))}

      <h3>Sum of all ages</h3>
      <p>{ages.reduce((total, age) => total + age, 0)}</p>

      <h3>Company object created with destructuring</h3>
      {(() => {
        const { name, category } = companies[0];
        const company = {
          name,
          category,
          print() {
            console.log(this.name);
          },
        };
        company.print();
        return (
          <div>
            <p>Name: {company.name}</p>
            <p>Category: {company.category}</p>
          </div>
        );
      })()}

      <h3>Sum of any number of arguments</h3>
      <p>
        {((...numbers) => numbers.reduce((total, number) => total + number, 0))(
          1,
          2,
          3,
          4,
          5,
        )}
      </p>

      <h3>Arguments added to an array</h3>
      <p>{JSON.stringify(argumentsArray)}</p>

      <h3>Street from person</h3>
      <p>{street}</p>

      <h3>Incrementing counter</h3>
      <p>{counterResults.join(", ")}</p>

      <h3>Query parameters</h3>
      <p>{JSON.stringify(queryParameters)}</p>

      <h2>Promise</h2>
      <p>{promiseResult}</p>
    </div>
  );
};

export default Ex1;
