import { useEffect } from "react"

const useTitle = title => {
    useEffect( () => {
        document.title = `${title} | Doll FairyWorld`;
    }, [title])
}

export default useTitle;