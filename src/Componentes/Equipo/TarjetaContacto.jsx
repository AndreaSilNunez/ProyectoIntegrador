export default function TarjetaContacto({ nombre, email, puesto, foto }) {
  return (
    <div className="col-md-3 mb-3">
      <div className="card text-center">
        <img 
          src={foto} 
          alt={nombre} 
          width="150" height="150"
          className="d-block mx-auto"
        />

        <div className="card-body text-center">
          <h6>{nombre}</h6>
          <p className="mb-1">{puesto}</p>
          <small>{email}</small>
        </div>
      </div>
    </div>
  );
}