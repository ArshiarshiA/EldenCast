import React from "react";

export default function CheckCateIsExist({ element, text, children }: { element: any, text: string, children?: React.ReactNode }) {
    return (
         element && (
            <div className="flex gap-2 pt-3">
                {children}
                <h1>{text} : {element}</h1>
            </div>
        )
    )
}