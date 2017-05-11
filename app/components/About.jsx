var React     = require('react');

var About      = (props) => {
  return (
      <div>
        <h1 className="text-center page-title">About</h1>
        <p>This is a Timer application build on React. I have built this
for the Complete React Web App Developer Course.</p>
        <p>
          Here are the some of the tools I used:
        </p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a>
             - This was the JavaScript framework used.
          </li>
        </ul>
      </div>
      );
};

module.exports  = About;