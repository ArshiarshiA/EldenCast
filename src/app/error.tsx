'use client'
import Errors from "@/components/errors/error"

export default function Error() {

    const refreshHandler = () => location.reload()

    return (
        <Errors
            desc="we have some truble here please refresh the web;"
            butTitle="Refresh"
            event={refreshHandler}
        />
    )
}