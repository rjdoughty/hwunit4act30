const employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '223-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];

let command = prompt('enter a command');
let message = 'false';


// 1. Print
if (command === 'print'){

for (let i = 0; i < employeeList.length; i++){
  render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
}
} 

// 2. verify

else if (command ==='verify'){
  const employeeName = prompt('enter a name');
  
  for (let i = 0; i < employeeList.length; i++){
    if (employeeName.toUpperCase() === employeeList[i].name.toUpperCase()) {
       message = 'true';
    } 
} 
render(message);
}


//3. lookup
else if (command === 'lookup'){
  const employeeName = prompt('enter a name');

  for (let i = 0; i < employeeList.length; i++){
    if (employeeName.toUpperCase() === employeeList[i].name.toUpperCase()) {
      render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
    } 
    
    
} 
}

//4. contains
else if (command === 'contains'){
  const employeeName = prompt('enter a name');

  for (let i = 0; i < employeeList.length; i++){
    if (employeeList[i].name.toUpperCase().includes(employeeName.toUpperCase())) {
      render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
    } 
}    
}

//5. update
else if (command === 'update'){
  const employeeName = prompt('enter a name');
  const employeeProperty = prompt('name, phonenumber, or officenumber?');
    let employeeValue = prompt('enter a value');
/*
  for (let i = 0; i < employeeList.length; i++){ 
    if (employeeName.toUpperCase() === employeeList[i].name.toUpperCase() && employeeProperty.toUpperCase() === employeeList[i][employeeProperty].toUpperCase()) {
      employeeList[i][employeeProperty] = employeeValue;
      render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
      }
    }
  }

*/

  for (let i = 0; i < employeeList.length; i++){ 
    if (employeeName.toUpperCase() === employeeList[i].name.toUpperCase() && employeeProperty.toUpperCase() === 'NAME') {
    employeeList[i].name = employeeValue;
    render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
    }
    else if (employeeName.toUpperCase() === employeeList[i].name.toUpperCase() && employeeProperty.toUpperCase() === 'PHONENUMBER') {
      employeeList[i].phoneNum = employeeValue;
      render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
    }
    else if (employeeName.toUpperCase() === employeeList[i].name.toUpperCase() && employeeProperty.toUpperCase() === 'OFFICENUMBER') {
      employeeList[i].officeNum = employeeValue;
      render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
    }
    }
      
}


//6 add
  else if (command === 'add'){
    const name = prompt('enter a name');
    const officeNum = prompt('enter office number');
    const phoneNum = prompt('enter telephone number');
      employeeList.push({name, officeNum, phoneNum});
      
      for (let i = 0; i < employeeList.length; i++){
        render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
      }
  } 


else if (command === 'delete'){
  const name = prompt('enter a name');
  for (let i = 0; i < employeeList.length; i++){
    if (name.toUpperCase() === employeeList[i].name.toUpperCase()){
      employeeList.splice(i, 1);
      
      for (let i = 0; i < employeeList.length; i++){
        render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);}
    }

    }
  }

  else if (command === 'area'){
    const employeePhone = prompt('enter an area code');
  
    for (let i = 0; i < employeeList.length; i++){
      if (employeeList[i].phoneNum.startsWith(employeePhone)) {
        render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
      } 
  }    
  }

else 
{
  render('invalid command')
}