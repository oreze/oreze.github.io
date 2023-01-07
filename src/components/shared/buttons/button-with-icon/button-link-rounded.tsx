import React, {FC} from 'react';
import "./button-link-rounded.css"

interface ButtonLinkRoundedProps {
    linkPath: string,
    target: "_blank",
    buttonText: string,
}

const ButtonLinkRounded: FC<ButtonLinkRoundedProps> = (buttonLinkRoundedProps: ButtonLinkRoundedProps) => {
    return (
        <a className="button-link-rounded" href={buttonLinkRoundedProps.linkPath}
           target={buttonLinkRoundedProps.target}>
            {buttonLinkRoundedProps.buttonText}
        </a>
    );
}

export default ButtonLinkRounded;
