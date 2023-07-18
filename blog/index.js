const blogs = [
  {
    title: 'Blog 1',
    description: 'DESIGN FOR MANKIND',
    content: ' A lifestyle blog by Erin Loechner, filled with beautifully-written essays on everything from design to parenting, marriage, work, travel and more.',
    datetime: '2023-07-16T10:30:00',
  },
  {
    title: 'Blog 2',
    description: 'A CUP OF JO',
    content: 'A lifestyle blog by Joanna Goddard covering everything from style to food, design, travel, relationships and motherhood.',
    datetime: '2023-07-17T09:45:00',
  },
  {
    title: 'Blog 3',
    description: 'ENJOY IT',
    content: 'A lifestyle and DIY blog by Elise Blaha Cripe, full of tons of great inspiration for all things DIY an honest peek into daily life with her husband and two cute kiddos',
    datetime: '2023-07-15T14:20:00',
  },
  {
    title: 'Blog 4',
    description: 'CUPCAKES & CASHMERE',
    content: ' A lifestyle and fashion blog by Emily Schuman, full of all sorts of great posts on everything from fashion/beauty to decor, recipes, work, and reflections on life with her husband and young daughter.',
    datetime: '2023-07-17T13:00:00',
  },
  // ... more blogs
];

blogs.sort((a, b) => new Date(b.datetime) - new Date(a.datetime));

const blogContainer = document.getElementById('blogContainer');

blogs.slice(0, 4).forEach((blog) => {
  const blogElement = document.createElement('div');
  blogElement.className = 'blog';

  const titleElement = document.createElement('h2');
  titleElement.textContent = blog.title;
  blogElement.appendChild(titleElement);

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = blog.description;
  blogElement.appendChild(descriptionElement);

  const contentElement = document.createElement('p');
  contentElement.textContent = blog.content;
  blogElement.appendChild(contentElement);

  const datetimeElement = document.createElement('p');
  datetimeElement.className = 'datetime';
  datetimeElement.textContent = new Date(blog.datetime).toLocaleString();
  blogElement.appendChild(datetimeElement);

  blogContainer.appendChild(blogElement);
});
