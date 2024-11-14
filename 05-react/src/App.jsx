import './App.css'

function App() {

  const COURSES = {
    'CNIT 131': { title: 'Internet Basics and Beginning HTML' },
    'CNIT 131A': { title: 'XML and JSON' },
    'CNIT 131H': { title: 'Introduction to HTML and CSS' },
    'CNIT 132': { title: 'Intermediate HTML and CSS' },
    'CNIT 132A': { title: 'Advanced HTML and CSS' },
    'CNIT 133': { title: 'JavaScript, jQuery, Ajax' },
    'CNIT 133A': { title: 'JavaScript Libraries/Frameworks', prereqs: ['CNIT 133'] },
    'CNIT 133I': { title: 'JavaScript for IoT and XR', prereqs: ['CNIT 133'] },
    'CNIT 133M': { title: 'Mobile Web Dev with HTML, CSS & JS' },
    'CNIT 134': { title: 'Server Side Technologies for the Web', prereqs: ['CNIT 133'] },
  }

  return (
    <>
    </>
  )
}

export default App
