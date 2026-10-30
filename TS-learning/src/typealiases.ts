//  this is basically how to predefine long type thatll be used

type StringOrNum = string | number;
type objWithName = { name: string; uid: StringOrNum };

const greet = (user: { name: string; uid: StringOrNum }) => {
  console.log(`${user.name} says hello`);
};
const greetAgain = (user:objWithName) => {
  console.log(`${user.name} says hello`);
};

/// it reduces code duplication