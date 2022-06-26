import React from "react";
import { getInitialData } from "../utils";

function ListElement() {
    return(
        <div className="notes-list">
            {
                getInitialData.map((datanya) => (
                    <div>
                    </div>
                ))
            }
        </div>

    )
}