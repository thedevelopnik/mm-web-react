import React, { Component } from "react";
import { Card, CardHeader, CardText } from "material-ui/Card";

export default class Legal extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardHeader title="Montessori Match Terms and Conditions" />
                    <CardText>
                        <p>
                            Please read these Terms and Conditions completely before using Montessori Match (“Site”), which is owned and operated by Connectique. This Agreement documents the legally binding terms and conditions attached to the use of the site MontessoriMatch.com


                            By using or accessing the Site in any way, viewing or browsing the Site, or adding your own content to the Site, you are agreeing to be bound by these Terms and Conditions.
                        </p>
                        <h2>Intellectual Property</h2>
                        <p>
                            The Site and all of its original content are the sole property of Connectique and are, as such, fully protected by the appropriate international copyright and other intellectual property rights laws.
                        </p>
                        <h2>Termination</h2>
                        <p>
                            MontessoriMatch.com reserves the right to terminate your access to the Site, without any advance notice.
                        </p>
                        <h2>Governing Law</h2>
                        <p>
                            This Agreement is governed in accordance with the laws of Colorado, United States.
                        </p>
                        <h2>Changes to This Agreement</h2>
                        <p>
                            Montessori Match reserves the right to modify these Terms and Conditions at any time. We do so by posting and drawing attention to the updated terms on the Site. Your decision to continue to visit and make use of the Site after such changes have been made constitutes your formal acceptance of the new Terms and Conditions.


                            Therefore, we ask that you check and review this Agreement for such changes on an occasional basis. Should you not agree to any provision of this Agreement or any changes we make to this Agreement, we ask and advise that you do not use or continue to access the Montessori Match site immediately.


                            {" "}
                        </p>
                        <h2>Contact Us</h2>
                        <p>
                            If you have any questions about this Agreement, please feel free to contact us at Hello@MontessoriMatch.com.
                        </p>
                    </CardText>
                </Card>
            </div>
        );
    }
}
