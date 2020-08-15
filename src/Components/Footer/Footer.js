import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <>
             <footer className="fadeInUp col-md-12">
        <a href="https://github.com/mehulk05/NewsApp-using-React" className="button github"><svg xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                </path>
            </svg><span>Open Sourced on GitHub</span></a>



        <a href="https://medium.com/@mehulkothari05/news-app-using-reactjs-f9752d7ab6ce" className="button btn-light medium">
            <span><img className="img-circle" width="20" alt=""
                    src="https://seeklogo.com/images/M/medium-logo-93CDCF6451-seeklogo.com.png"/>Read about this Project
                On MEDIUM</span></a>


        <div className="footer-icons">
            <ul className="navbar-nav ">
                <li className="nav-item inline-block">
                    <a href="https://github.com/mehulk05" aria-label="Github" className="nav-link text-github"><i
                            className="fa fa-github"></i></a></li>
                <li className="nav-item inline-block">
                    <a href="https://medium.com/@mehulkothari05" aria-label="Medium" className="nav-link">

                        <span><img className="img-circle medium-icon" width="24" alt=""
                                src="https://seeklogo.com/images/M/medium-logo-93CDCF6451-seeklogo.com.png"/></span></a>
                </li>
                <li className="nav-item inline-block"><a href="https://www.instagram.com/mehul_kothari05/" aria-label="Insagram" className="nav-link"><i className="fa fa-instagram"
                        ></i></a>
                </li>
                <li className="nav-item inline-block"><a href="https://www.linkedin.com/in/mehul-kothari-765868126/" aria-label="LinkedIn" className="nav-link"><i className="fa fa-linkedin"
                        ></i></a>
                </li>
            </ul>
        </div>
    </footer>
    <h5  className="text-center copyright"> © Copyrights reserved by Mehul Kothari</h5>
        </>
    )
}

export default Footer
