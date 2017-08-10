import uniqid from 'uniqid';

const data = [];

for (let i = 0; i < 10; i++) {
  data.push({
    id: uniqid(),
    title: 'Sample note ' + i,
    content: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.',
    selected: false,
    editable: false
  });
}

export default data;
