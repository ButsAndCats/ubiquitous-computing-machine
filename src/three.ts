/** 
 * The data loader pattern is used to bulk fetch items from a database.
 * They return the values in the same order as the keys are passed in. Any items not found should be represented by undefined.
 * Implement the below person data loader.
 */

// I renamed this interace because it was inheriting keys from question 4
interface ThreePerson {
  email?: string;
}

// Your fake database always returns all people in the db
const getPeopleFromDB = (): Array<ThreePerson> => [
  { email: "t2@mindfulness.com" },
  { email: "t@mindfulness.com" }
];

const loadUsersByEmail = (emails: Array<string>): Array<ThreePerson | undefined> => {
  const allEmails = getPeopleFromDB();
  const flatEmails = allEmails.map(({ email }) => email);
  const returnedEmails = emails.map((email) => {
    const index = flatEmails.indexOf(email);
    return index > -1 ? allEmails[index] : undefined
  })
  return returnedEmails
};

console.log(
  loadUsersByEmail([
    "t@mindfulness.com",
    "t2@mindfulness.com",
    "t3@mindfulness.com"
  ])
);