function getUniqueCelebrityProps(person1, person2) {
  let person1Props = Object.keys(person1);
  let person2Props = Object.keys(person2);
  return person1Props.reduce((unique, prop) => {
    if (!person2Props.includes(prop)) {
      unique.push(prop);
    }
    return unique;
  }, []);
}

console.log(
  getUniqueCelebrityProps(
    {
      firstName: "James",
      lastName: "Cameron",
      age: 64,
    },
    { firstName: "Steven", born: 1946 }
  )
);

// function CatFacts() {
//   const facts = null;
//   fetch("https://cat-fact.herokuapp.com/facts")
//     .then((response) => response.json())
//     .then((data) => {
//       facts = data;
//     });
//   return facts.all.map((fact) => <p>{fact.text}</p>);
// }
