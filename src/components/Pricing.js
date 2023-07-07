import "bootstrap/dist/css/bootstrap.css"
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faLeaf, faBolt, faCheck } from '@fortawesome/free-solid-svg-icons';

export function Pricing() {
    return (
    <>
        <div className="content">
            <div className="inset-content">
                <h1>Ready to get started?</h1>
                <p>Choose a plan tailared to your needs</p>
                <div className="box-input">
                    <p>Monthly</p>
                    <div>
                    <Form.Check type="switch" id="custom-switch" />   
                    </div>
                    <div>
                        <div className="off">20% off</div>
                        <h5>Yealy</h5>
                    </div>
                </div>

                <div className="three-item">
                    {/*  */}
                    <div className="item">
                        <div className="titr-item">
                            <FontAwesomeIcon className="icon" icon={faLeaf} />
                            <p className="p">Lite</p>
                        </div>
                        <h4>Perfect to get started</h4>

                        <div className="mony">
                            <span>$</span>
                            <p>11</p>
                            <h5>per seat /month</h5>
                        </div>

                        <button className="btn-item">Try 7 days for free</button>

                        <ul className="ul-option">
                            <li className="ul-titr">Lite includes :</li>
                            <li><FontAwesomeIcon className="icon-tick" icon={faCheck} />CMS integration</li>
                            <li><FontAwesomeIcon className="icon-tick" icon={faCheck} />Email & SMS reminders</li>
                            <li><FontAwesomeIcon className="icon-tick" icon={faCheck} />Customer support 24/7</li>
                        </ul>

                        <div className="item-footer">
                            See all features
                        </div>
                    </div>
                    {/*  */}
                    <div className="item">
                        <div className="titr-item">
                            <FontAwesomeIcon className="icon" icon={faRobot} />
                            <p className="p">Pro</p>
                        </div>
                        <h4>Best for professionals</h4>

                        <div className="mony">
                            <span>$</span>
                            <p>19</p>
                            <h5>per seat /month</h5>
                        </div>

                        <button className="btn-item">Get started</button>

                        <ul className="ul-option">
                            <li className="ul-titr">Everything in Lite, plus :</li>
                            <li><FontAwesomeIcon className="icon-tick" icon={faCheck} />Advenced analytics</li>
                            <li><FontAwesomeIcon className="icon-tick" icon={faCheck} />100+ integrations</li>
                            <li><FontAwesomeIcon className="icon-tick" icon={faCheck} />Chat widget</li>
                            <li><FontAwesomeIcon className="icon-tick" icon={faCheck} />Templates library</li>
                        </ul>

                        <div className="item-footer">
                            See all features
                        </div>
                    </div>
                    {/*  */}
                    <div className="item">
                        <div className="titr-item">
                            <FontAwesomeIcon className="icon" icon={faBolt} />
                            <p className="p">Ultimate</p>
                        </div>
                        <h4>Toolset for hard players</h4>

                        <div className="mony">
                            <span>$</span>
                            <p>35</p>
                            <h5>per seat /month</h5>
                        </div>

                        <button className="btn-item">Get started</button>

                        <ul className="ul-option">
                            <li className="ul-titr">Everything in Pro, plus :</li>
                            <li><FontAwesomeIcon className="icon-tick" icon={faCheck} />Daily performance reports</li>
                            <li><FontAwesomeIcon className="icon-tick" icon={faCheck} />Decicated assistant</li>
                            <li><FontAwesomeIcon className="icon-tick" icon={faCheck} />Artificial intelligence</li>
                            <li><FontAwesomeIcon className="icon-tick" icon={faCheck} />Marketing tools & automotions</li>
                        </ul>

                        <div className="item-footer">
                            See all features
                        </div>
                    </div>
                    {/*  */}
                </div>
            </div>
        </div>

        <div className="content-footer">
            <br/><br/><br/><br/>
            <div className="inset-footer">
                <div className="titr-footer-left">
                    <h3>Overview</h3>
                </div>
                <div className="titr-footer">
                    <h3>Lite</h3>
                    <h3>Pro</h3>
                    <h3>Ultimate</h3>
                </div>
            </div>
                
            <div className="inset-footer" style={{backgroundColor:'rgb(243, 247, 246)'}}>
                <div className="titr-footer-left">
                    <h3>CMS integration</h3>
                </div>
                <div className="titr-footer">
                    <h3>  </h3>
                    <h3><FontAwesomeIcon className="icon-tick" icon={faCheck} /></h3>
                    <h3><FontAwesomeIcon className="icon-tick" icon={faCheck} /></h3>
                </div>
            </div>

            <div className="inset-footer">
                <div className="titr-footer-left">
                    <h3>Advenced analytics</h3>
                </div>
                <div className="titr-footer">
                    <h3>   </h3>
                    <h3><FontAwesomeIcon className="icon-tick" icon={faCheck} /></h3>
                    <h3><FontAwesomeIcon className="icon-tick" icon={faCheck} /></h3>
                </div>
            </div>
        </div>
    </>
    )
}