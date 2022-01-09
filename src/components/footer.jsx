const year = new Date()

const Footer = () => {
  return (
    <footer className="container-fluid bg-dark py-4 my-6">
      <p className="text-center text-light py-2 m-0">Copyright &copy; Your Website {year.getFullYear()}</p>
    </footer>
  )
}

export default Footer