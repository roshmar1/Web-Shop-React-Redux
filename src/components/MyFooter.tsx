import React from "react";
import '../css/footer.css'

export function MyFooter()
{
    return(
        <div>
            <footer className="" >
            <div className="footer-content" >
                <span className="footer-copyright">© 2020 Copyright:</span>
                <a className="footer-link" href="../Index.html">MyStore.com</a>
            </div>
            </footer>
        </div>
    );
}