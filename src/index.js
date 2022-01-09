import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header'
import Container from './components/content'
import Footer from './components/footer'

ReactDOM.render(
  [
  <Header />,
  <Container />,
  <Footer />
  ]
  ,
  document.getElementById('root')
)