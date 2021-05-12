interface Person {
  id: number;
  name: string;
  birthdate: Date;
}

type UnsavedPerson = Omit<Person, "id">

// Test
const person: UnsavedPerson = {
  name: "George",
  birthdate: new Date()
}