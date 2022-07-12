import logo from "../../assets/img/logo.svg";
import "./styles.css";

export function Header() {
    return (
        <>
            <header>
                <img src={logo} alt="Logo DS Meta" />
                <h1>DSMeta</h1>
                <span>
                    Desenvolvido por
                    <a href="https://linkedin.com/in/eduardomarra" target="_blank">
                    Eduardo Marra
                    </a>
                </span>
            </header>
        </>
    );
    }
