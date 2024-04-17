interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const alice: Student = {
  firstName: 'Alice',
  lastName: 'Smith',
  age: 25,
  location: 'California'
}

const bob: Student = {
  firstName: 'Bob',
  lastName: 'Johnson',
  age: 30,
  location: 'Texas'
}

const students: Array<Student> = [alice, bob];

const bodyElement: HTMLBodyElement = document.getElementsByTagName("body")[0];
const tableElement: HTMLTableElement = document.createElement('table');
const headerElement: HTMLTableSectionElement = document.createElement('thead');
const firstNameHeader: HTMLTableCellElement = document.createElement('th');
const ageHeader: HTMLTableCellElement = document.createElement('th');

firstNameHeader.innerText = 'First Name';
ageHeader.innerText = 'Age';
firstNameHeader.style.border = '1px solid gray';
ageHeader.style.border = '1px solid gray';
firstNameHeader.style.padding = '.5rem';
ageHeader.style.padding = '.5rem';
tableElement.style.border = '1px solid gray';
tableElement.style.borderCollapse = 'collapse';

headerElement.append(firstNameHeader);
headerElement.append(ageHeader);

tableElement.append(headerElement);

students.forEach((student) => {
  const rowElement: HTMLTableRowElement = document.createElement('tr');

  const firstNameCell: HTMLTableCellElement = document.createElement('td');
  const ageCell: HTMLTableCellElement = document.createElement('td');

  firstNameCell.innerText = student.firstName;
  ageCell.innerText = String(student.age);

  firstNameCell.style.border = '1px solid gray';
  ageCell.style.border = '1px solid gray';
  firstNameCell.style.padding = '.5rem';
  ageCell.style.padding = '.5rem';

  rowElement.append(firstNameCell);
  rowElement.append(ageCell);

  tableElement.append(rowElement);
});

bodyElement.append(tableElement);

