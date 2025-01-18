import * as React from "react";

interface EmailTemplateProps {
  verificationCode: string;
}

const OtpVerificationTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  verificationCode,
}) => (
  <div>
    <h1>Your verification code {verificationCode}!</h1>
  </div>
);

export default OtpVerificationTemplate;
