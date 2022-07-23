import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class IconLabel extends React.Component {

    render() {
        return (
            <button
                type="button"
                title={this.props.label}
                className={this.props.className}
                onClick={this.props.onClick}
                disabled={this.props.disabled}>
                {
                    this.props.faIcon &&
                    <div className="col-12 text-center">

                        <FontAwesomeIcon
                            icon={this.props.faIcon} />
                        {
                            this.props.labeled && this.props.label &&
                            <span className="m-2">
                                {this.props.label}
                            </span>
                        }
                    </div>
                }
            </button>
        )
    }
}

export default IconLabel
