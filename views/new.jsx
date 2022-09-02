const React = require('react')
const Default = require('./layouts/Default')

function New () {
    return (
      <Default>
        <div className="backButton">
          <a href="/breads"><button>Go back to the index</button></a>
        </div>

      </Default>
    )
}

module.exports = New

