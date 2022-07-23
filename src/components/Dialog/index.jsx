import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import IconLabel from "../IconLabel";

class Dialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show_modal: false
        };
        this.show_modal = this.show_modal.bind(this);
        this.hide_modal = this.hide_modal.bind(this);
    }

    componentDidMount() {
        this.setState({ show_modal: false });
    }

    show_modal() {
        this.setState({ show_modal: true });
    }

    hide_modal() {
        this.setState({ show_modal: false });
    }

    render() {
        return (
            <Fragment>
                <span className={this.props.className} onClick={this.show_modal} >{this.props.label}</span>
                <Modal size="xl" show={this.state.show_modal}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    onHide={this.hide_modal}>
                    <Modal.Body>
                        <h4>{this.props.title}</h4>
                        <br />
                        {
                            this.props.children
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        <span className={this.props.className} onClick={() => {
                                this.props.onClick();
                                this.hide_modal();
                            }}>{this.props.label}</span>
                           
                           
                    </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}


const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Dialog);
