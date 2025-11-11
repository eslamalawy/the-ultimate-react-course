import { useRouter } from "next/router"

function Cabin() {
    // handle the pages router "next/router" 
    const router = useRouter()
    return (
        <div>
            Cabin #{router.query.cabinId}
        </div>
    )
}

export default Cabin
