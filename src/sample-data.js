import uniqid from 'uniqid';

const data = [];

for (let i = 0; i < 10; i++) {
  data.push({
    id: uniqid(),
    title: 'Sample note ' + i,
    content: 'Ni HAO',
    selected: false,
    editable: false
  });
}

export default data;
