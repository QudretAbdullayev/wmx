import React from "react";

export const formatText = (text) => {
    if (!text) return null; // Handle empty or undefined text
    return text.split("\r\n").map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));
}