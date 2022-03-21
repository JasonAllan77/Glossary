const fancyString = `This is a string`;

const favNumber = 42;
const message = 'My favoutie number is ' + favNumber; // Concatantion
const message = `My favourite number is ${favNumber}`; // Interpolation

const maths = `4 * 2 = ${4 * 2}`;

const name = `Douglas Hofstadter`;
const greeting = `Hello ${name.toUpperCase()}`;

const greeting = `Hello ${name}`;

const course = {
    name: "JavaScript Development",
    provider: "General Assembly",
    topics: ["JavaScript", "APIs", "React"],
    numberOfHours: 60,
  };
  
  const markup = `
    <div>
      <h2>${course.name}</h2>
      <h4>Provided by ${course.provider}</h4>
      <h5>Course time: ${course.numberOfHours}</h5>
      <p>This course covers: ${course.topics.join(", ")}</p>
    </div>
  `;
  
  console.log(markup);
  