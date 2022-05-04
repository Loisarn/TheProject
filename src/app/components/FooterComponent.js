import React from 'react';

export class FooterComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <footer className="footer">
                    <span className="text-muted">@Loisarn</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent