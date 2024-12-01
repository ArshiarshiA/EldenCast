'use client'
import Errors from "@/components/errors/error";

export default function Custom404() {

    const redirect = () => {
        location.assign('/')
    }

    return (
        <Errors
            desc="We dont how this page;"
            butTitle="Home"
            event={redirect}
        />
    )
}