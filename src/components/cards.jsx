const Cards = () => {
  return (
    <section className="container py-4">
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
        <Card img="https://picsum.photos/id/221/500/325" title="Card title" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quibusdam, quo dolores magnam" />
        <Card img="https://picsum.photos/id/38/500/325" title="Card title" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quod rerum ipsam, doloremque harum doloribus a expedita totam iure distinctio minima autem" />
        <Card img="https://picsum.photos/id/93/500/325" title="Card title" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis necessitatibus quas alias. Saepe, quo voluptates unde nostrum fuga" />
        <Card img="https://picsum.photos/id/95/500/325" title="Card title" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quibusdam, quo dolores magnam" />
      </div>
    </section>
  )
}

const Card = (props) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={props.img} className="card-img-top" alt={props.alt} />
        <div className="card-body text-center">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
        </div>
        <div className="card-footer text-center">
          <button type="button" className="btn btn-primary">Find Out More!</button>
        </div>
      </div>
    </div>
  )
}

export default Cards