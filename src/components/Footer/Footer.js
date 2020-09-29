import React from 'react'
import AboutUs from './InnerFooter/AboutUs'
import UsefulLinks from './InnerFooter/UsefulLinks/UsefulLinks'
import ContactUs from './InnerFooter/ContactUs'
import Newsletter from './InnerFooter/Newsletter'

const footer = () => {

    const style = {
        background: "#00264d"
    }

    return (
        <footer className="text-light" style={style}>
            <div className="container py-3">
                <div className="row">
                    <AboutUs />
                    <UsefulLinks />
                    <ContactUs />
                    <Newsletter />
                </div>
            </div>
            <div className="container-fluid text-center py-2" style={style}>
                &copy; 2020. All rights are reserved
            </div>
        </footer>
    )
}

export default footer