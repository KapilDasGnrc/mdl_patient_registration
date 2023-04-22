import React from 'react'

function Footer() {
    return (

        <footer className="page-footer font-small bg-primary text-white pt-4">

            {/* <!-- Footer Links --> */}
            <div className="container-fluid text-center text-md-left">

                {/* <!-- Grid row --> */}
                <div className="row">

                    {/* <!-- Grid column --> */}
                    <div className="col-md-6 mt-md-0 mt-3">

                        {/* <!-- Content --> */}
                        <h5 className="text-uppercase">Footer Content</h5>
                        <p>Here you can use rows and columns to organize your footer content.</p>

                    </div>
                    {/* <!-- Grid column --> */}

                    <hr className="clearfix w-100 d-md-none pb-3"></hr>

                    {/* <!-- Grid column --> */}
                    <div className="col-md-3 mb-md-0 mb-3">

                        {/* <!-- Links --> */}
                        <h5 className="text-uppercase">Links</h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="#!" className='text-white'>Link 1</a>
                            </li>
                            <li>
                                <a href="#!" className='text-white'>Link 2</a>
                            </li>
                            <li>
                                <a href="#!" className='text-white'>Link 3</a>
                            </li>
                            <li>
                                <a href="#!" className='text-white'>Link 4</a>
                            </li>
                        </ul>

                    </div>
                    {/* <!-- Grid column --> */}

                    {/* <!-- Grid column --> */}
                    <div className="col-md-3 mb-md-0 mb-3">

                        {/* <!-- Links --> */}
                        <h5 className="text-uppercase">Links</h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="#!" className='text-white'>Link 1</a>
                            </li>
                            <li>
                                <a href="#!" className='text-white'>Link 2</a>
                            </li>
                            <li>
                                <a href="#!" className='text-white'>Link 3</a>
                            </li>
                            <li>
                                <a href="#!" className='text-white'>Link 4</a>
                            </li>
                        </ul>

                    </div>
                    {/* <!-- Grid column --> */}

                </div>
                {/* <!-- Grid row --> */}

            </div>
            {/* <!-- Footer Links --> */}

            {/* <!-- Copyright --> */}
            <div className="footer-copyright text-center bg-dark text-white py-3">© 2020 Copyright:
                <a href="/"> google.com</a>
            </div>
            {/* <!-- Copyright --> */}

        </footer>
    )
}

export default Footer