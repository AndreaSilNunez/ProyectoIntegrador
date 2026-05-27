import Directorio from "../../Equipo/Directorio";

export default function Footer() {
  return (
    <footer className="bg-secondary text-light mt-5 pt-4">
      <div>

        <h5 className="mb-3">Nuestro equipo</h5>
       <Directorio />

        <hr />

        <p className="text-center">© 2026 Andrea Silvana Nuñez </p>
      </div>
    </footer>
  );
}

