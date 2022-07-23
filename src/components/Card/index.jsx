import React from 'react';
function Card(props) {
    return (
        <div className={props.className} >
            
                <div className={"card"} >
                    <div className="card-body">
                        {props.title &&
                            <h5 className="card-title mb-2">
                                {props.title}
                            </h5>
                        }
                        {props.subtitle &&
                            <h6 className="card-subtitle mb-3 text-muted">
                                {props.subtitle}
                            </h6>
                        }
                        {props.children &&
                            <div className={"card-text "+ props} >
                                {props.children}
                            </div>
                        }

                        {props.actions &&
                            <div className="card-link m-1 text-end">
                                {props.actions}
                            </div>
                        }
                    </div>
                </div>
           
        </div>
    );

}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default Card
