import React from 'react'
import Toolbar from '../Header/Toolbar'
import Footer from '../Footer/Footer'

import Auxiliary from '../../hoc/Auxiliary'

const layout = props => (
    <Auxiliary>
        <Toolbar />
            <main>
                {props.children}
            </main>
        <Footer />
    </Auxiliary>
)

export default layout