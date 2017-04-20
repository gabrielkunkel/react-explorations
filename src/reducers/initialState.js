export default {
  fuelSavings: {
    newMpg: '',
    tradeMpg: '',
    newPpg: '',
    tradePpg: '',
    milesDriven: '',
    milesDrivenTimeframe: 'week',
    displayResults: false,
    dateModified: null,
    necessaryDataIsProvidedToCalculateSavings: false,
    savings: {
      monthly: 0,
      annual: 0,
      threeYear: 0
    }
  },
  hello: {
    name: 'Gabriel'
  },
  form: {
    people: [
      {
        _id: "adfpnu64",
        name: "Johnny",
        city: "Bobville",
        age: 22
      },
      {
        _id: "adf2pnu6",
        name: "Renee",
        city: "Juro",
        age: 21
      },
      {
        _id: "ad3fpnu",
        name: "Lipstasch",
        city: "Bobville",
        age: 45
      }
    ],
    addPersonPanel: false,
    updatePersonPanel: false,
    setForDeleteArr: [] // TODO: Add remove from set to delete
  }
};
