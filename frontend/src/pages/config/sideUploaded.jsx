import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

// export const SideUploaded = () => {

//     const data = useSelector((state) => state.sideIndividualElement).fileUploaded

//     let validator = false

//     validator = data && true

//     console.log(validator)

//     return (
//         validator ? <Outlet /> : <Navigate to='/individual' />
//     )
// }

// export const SideIndividualConfig = () => {
//     const data = useSelector((state) => state.sideIndividualElement).fileUploaded

//     let validator = false

//     validator = data && true

//     return (
//         !validator && 
//     )
// }