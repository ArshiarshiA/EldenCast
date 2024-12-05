'use client'
import Errors from "@/components/errors/error"

export default function Error() {

    const refreshHandler = () => location.reload()

    return (
        <Errors
            desc="we have some truble here please check your concection and refresh the web;"
            butTitle="Refresh"
            event={refreshHandler}
        />
    )
}