import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    const today = new Date();

    return (
        <footer className="mt-32 px-12 mx-12 text-gray-600 text-sm">
            <div className="mb-5 text-start">
            <FontAwesomeIcon className="mr-4 hover:text-white cursor-pointer" icon={faFacebook} size="2x"/>
            <FontAwesomeIcon className="mr-4 hover:text-white cursor-pointer" icon={faInstagram} size="2x"/>
            <FontAwesomeIcon className="mr-4 hover:text-white cursor-pointer" icon={faTwitter} size="2x"/>
            <FontAwesomeIcon className="hover:text-white cursor-pointer" icon={faYoutube} size="2x"/>
            </div>
            <div className="grid grid-cols-4 gap-2 my-8">
                <a className="hover:text-white" href="#">Idiomas e legendas</a>
                <a className="hover:text-white" href="#">Audiodescrição</a>
                <a className="hover:text-white" href="#">Centro de ajuda</a>
                <a className="hover:text-white" href="#">Cartão pré-pago</a>
                <a className="hover:text-white" href="#">Imprensa</a>
                <a className="hover:text-white" href="#">Relação com investidores</a>
                <a className="hover:text-white" href="#">Carreiras</a>
                <a className="hover:text-white" href="#">Termos de uso</a>
                <a className="hover:text-white" href="#">Privacidades</a>
                <a className="hover:text-white" href="#">Avisos legais</a>
                <a className="hover:text-white" href="#">Preferências de cookies</a>
                <a className="hover:text-white" href="#">Informações corporativas</a>
                <a className="hover:text-white" href="#">Entre em contato</a>
            </div>
            <p className="text-center py-2"> © 1997 - {today.getFullYear()} Imagiflix, Inc.</p>
        </footer>
    )
}

export default Footer;