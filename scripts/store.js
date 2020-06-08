import item from './item.js';

const items = [];
let hideCheckedItems = false;

function findById(id) {
  debugger;
  const result = item.create.find(element => element.id);
  return result;
}

function addItem(name) {
  try {
    item.validateName;
    const results = item.create(name); //why does this need an argument but not item.validateName
    this.items.push(results);
  } catch (e) {
    console.log(`Cannot add item: ${error.message}`);
  }
}

function findAndToggleChecked(id) {
  if (this.findById(id) === id) {
    return this.checked === true;
  }
}

function findAndUpdateName(id, newName) {
  try {
    item.validateName;
    const result = findById(id);
    if (result === id) {
      this.name = newName;
    }
  } catch (e) {
    console.log(`Cannot update name: ${error.message}`)
  }
}

function findAndDelete(id) {
  const result = items.filter(element => element.id !== id);
  return result;
}

export default {
  items,
  hideCheckedItems,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete
};
